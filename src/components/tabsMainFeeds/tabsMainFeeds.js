import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { TabsList } from "components/tabsList";

import { getActiveTag, resetFeedsTagsActive } from "modules/tagsPopular";
import { resetFeedsTags } from "modules/feedsTags";
import { getIsLoggedIn } from "modules/userAuth";

const Component = ({
  activeTag,
  isLoggedIn,
  resetFeedsTagsActive,
  resetFeedsTags
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
      if (activeTag !== "") {
        setRedirect(false);
      }
    };
  }, [activeTag, isLoggedIn]);

  const resetActiveTag = () => {
    resetFeedsTagsActive();
    resetFeedsTags();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return <TabsList tabs={tabs} resetActiveTag={resetActiveTag} />;
};

const mapStateToProps = state => ({
  activeTag: getActiveTag(state),
  isLoggedIn: getIsLoggedIn(state)
});
const mapDispatchToProps = {
  resetFeedsTagsActive,
  resetFeedsTags
};

export const TabsMainFeeds = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
