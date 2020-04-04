import React, { useState, useEffect } from "react";

import { TabsList } from "components/tabs";

export const TabsProfileFeeds = ({ user }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (!user) return;
    const genTabs = [
      {
        url: `/profile/${user.username}`,
        name: `Посты ${user.username}`,
        tags: false
      },
      {
        url: `/profile/${user.username}/favorited`,
        name: `Избранные посты`,
        tags: false
      }
    ];
    setTabs(genTabs);
  }, [user]);

  return <TabsList tabs={tabs} />;
};
