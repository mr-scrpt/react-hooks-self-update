import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import {
  fetchFeedsGlobalRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError
} from "modules/feedsGlobal";

import { getIsLoggedIn } from "modules/userAuth";
import { FeedToggler } from "components/feedToggler";
import { Tabs } from "components/tabs";
import { ShowLoading } from "components/showLoading";
import { ShowErrors } from "components/showErrors";
import { Feeds } from "components/feeds";
import { Pagination } from "components/pagination";
import { PopularTags } from "components/popularTags";
import { getPaginators } from "helpers/getPaginators";
import { limit } from "constant";
import { isEmptyObject } from "helpers/isEmptyObject";
const Page = ({
  feedsList,
  loading,
  error,
  isLoggedIn,
  feedsCount,
  fetchFeedsGlobalRequest,
  match: { url },
  location: { search }
}) => {
  const { currentPage, offset } = getPaginators(search);

  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    //if (isEmptyObject(user)) return;
    const genTabs = [
      {
        url: `/feed`,
        name: `Ваши фиды`,
        tags: false
      },
      {
        url: `/`,
        name: `Все фиды`,
        tags: false
      }
      /* {
        url: `${url}/favorited`,
        name: `Избранные посты`,
        tags: false
      } */
    ];
    setTabs(genTabs);
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>Место для обмена знаниями</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {/*  <FeedToggler isLoggedIn={isLoggedIn} /> */}
            <Tabs tabs={tabs} />
            <ShowLoading loading={loading} />
            <ShowErrors errors={error} />

            {!loading && isEmptyObject(error) && feedsList.length && (
              <>
                <Feeds articles={feedsList} />
                <Pagination
                  total={feedsCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags search={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  feedsList: getFeedsList(state),
  feedsCount: getFeedsCount(state),
  loading: getFeedsLoading(state),
  error: getFeedsError(state),
  isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = {
  fetchFeedsGlobalRequest
};

export const GlobalFeed = connect(mapStateToProps, mapDispatchToProps)(Page);
