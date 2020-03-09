import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { isEmptyObject } from "helpers/isEmptyObject";

import { UserFeeds } from "components/userFeeds";
import { UserFeedsFavorited } from "components/userFeedsFavorited";
import { Tabs } from "components/tabs";

export const UserFeedsSwitcher = ({ user, url }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (isEmptyObject(user)) return;
    const genTabs = [
      {
        url: `${url}`,
        name: `Посты ${user.username}`,
        tags: false
      },
      {
        url: `${url}/favorited`,
        name: `Избранные посты`,
        tags: false
      }
    ];
    setTabs(genTabs);
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <div className="articles-toggle">
            <Tabs tabs={tabs} />
          </div>
          <Switch>
            <Route path={`${url}`} component={UserFeeds} exact />
            <Route
              path={`${url}/favorited`}
              component={UserFeedsFavorited}
              exact
            />
            <Route render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
