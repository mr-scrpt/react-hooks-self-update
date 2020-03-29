import React from "react";
import { Switch, Route } from "react-router-dom";

import { FeedsUser } from "components/feedsUser";
import { FeedsUserFavorited } from "components/feedsUserFavorited";
import { TabsProfileFeeds } from "components/tabsProfileFeeds";

export const UserFeedsSwitcher = ({ user, url }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <div className="articles-toggle">
            <TabsProfileFeeds user={user} />
          </div>
          <Switch>
            <Route path={`${url}`} component={FeedsUser} exact />
            <Route
              path={`${url}/favorited`}
              component={FeedsUserFavorited}
              exact
            />
            <Route render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
