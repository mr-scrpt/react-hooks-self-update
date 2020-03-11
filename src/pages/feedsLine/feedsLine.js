import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { getActiveTag, resetFeedsTagsActive } from "modules/tagsPopular";
import { getIsLoggedIn } from "modules/userAuth";

import { Tabs } from "components/tabs";
import { FeedsGlobal } from "components/feedsGlobal";
import { FeedsFollow } from "components/feedsFollow";
import { FeedsTags } from "components/feedsTags";

import { PopularTags } from "components/popularTags";

const Component = ({
  location: { search },
  activeTag,
  isLoggedIn,
  resetFeedsTagsActive
}) => {
  const [tabs, setTabs] = useState([]);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const genTabs = [
      {
        url: `/`,
        name: `Все фиды`,
        tags: false
      }
    ];

    if (isLoggedIn) {
      genTabs.push({
        url: `/feedFollow`,
        name: `Отслеживаемые фиды`,
        tags: false
      });
    }
    if (activeTag) {
      genTabs.push({
        url: `/feedTags/${activeTag}`,
        name: `${activeTag}`,
        tags: true
      });
    }

    setTabs(genTabs);
    return () => {
      setRedirect(false);
    };
  }, [activeTag, isLoggedIn]);

  const resetActiveTag = tagName => {
    resetFeedsTagsActive(tagName);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

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
            <Tabs tabs={tabs} resetActiveTag={resetActiveTag} />
            <Switch>
              <Route path="/" component={FeedsGlobal} exact />
              <Route path="/feedFollow" component={FeedsFollow} />
              <Route path="/feedTags/:tagName" component={FeedsTags} />
            </Switch>
          </div>
          <div className="col-md-3">
            <PopularTags search={{}} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  activeTag: getActiveTag(state),
  isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = {
  resetFeedsTagsActive
};

export const FeedsLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
