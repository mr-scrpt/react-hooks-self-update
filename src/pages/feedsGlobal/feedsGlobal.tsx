//Core
import React, { ReactElement, FC } from "react";

//Hooks
import { useFeedsGlobalFetch } from "@md/feedsGlobal/hooks";

//import { General } from "layouts/general";
/* import {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  getFeedsList,
  getFeedsCount,
  getFeedsLoading,
  getFeedsError,
  fetchLikeFeedRequest,
} from "@md/feedsGlobal"; */

/* import { getPaginators } from "@hl/getPaginators"; */
import { limit } from "constant";
/* import { FeedsMedia } from "@cm/feedsMedia"; */

// Types
import { FeedType } from "@md/feedsGlobal/types";

export const FeedsGlobal: FC = (
  {
    /* feeds,
  feedsLoading,
  feedsError,
  feedsCount,
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  fetchLikeFeedRequest,*/
    /* match: { url },
  location: { search }, */
  }
) => {
  /* const { currentPage, offset } = getPaginators(search); */

  /* 
  useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;
    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest]); */

  /* useEffect(() => {
    if (!fetchFeedsGlobalRequest) return;

    fetchFeedsGlobalRequest({ limit, offset });
  }, [fetchFeedsGlobalRequest, currentPage]);

  useEffect(() => {
    if (!fetchFeedsGlobalCountRequest) return;

    fetchFeedsGlobalCountRequest();
  }, [fetchFeedsGlobalCountRequest]); 
  */
  const { feedsList, feedsCount, loading, error } = useFeedsGlobalFetch("d");

  return (
    <div>
      {loading ||
        feedsList.map(
          (item: FeedType): ReactElement => (
            <div key={item.title}>{item.title}</div>
          )
        )}
    </div>
  );
  /* return (
    <General>
      <FeedsMedia
        feeds={feedsList}
        feedsLoading={loading}
        feedsError={error}
        feedsCount={feedsCount}
        //fetchLikeFeedRequest={fetchLikeFeedRequest}
        limit={limit}
        currentPage={currentPage}
        url={url}
      />
    </General>
  ); */
};

/* const mapStateToProps = (state) => ({
  feeds: getFeedsList(state),
  feedsLoading: getFeedsLoading(state),
  feedsError: getFeedsError(state),
  feedsCount: getFeedsCount(state),
});
const mapDispatchToProps = {
  fetchFeedsGlobalRequest,
  fetchFeedsGlobalCountRequest,
  fetchLikeFeedRequest,
};

export const FeedsGlobal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
 */
