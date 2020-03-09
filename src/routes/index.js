import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalFeed } from "pages/globalFeed";
/* import { Article } from "pages/article";
import { Autentifications } from "pages/autentifications";
import { TagFeed } from "pages/tagFeed";
import { FeedsFollow } from "pages/feedsFollow";
import { CreateArticle } from "pages/createArticle";
import { EditArticle } from "pages/editArticle";
import { Settings } from "pages/settings";
import { UserProfile } from "pages/userProfile";
import { PrivatRoute } from "routes/privatRoute"; */

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={GlobalFeed} exact />

        {/* <Route path="/profiles/:slug" component={UserProfile} />        
        <PrivatRoute path="/articles/new" component={CreateArticle} />
        <Route path="/articles/:slug/edit" component={EditArticle} />
        <Route path="/tags/:tagName" component={TagFeed} />
        <Route path="/feed" component={FeedsFollow} />
        <Route path="/registration" component={Autentifications} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Autentifications} />
        <Route path="/articles/:slug" component={Article} />
        <Route render={() => <div>404</div>} /> */}
      </Switch>
    </div>
  );
};
