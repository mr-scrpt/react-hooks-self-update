import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivatRoute } from "routes/privatRoute";

import { FeedsGlobal } from "pages/feedsGlobal";
import { FeedsTags } from "pages/feedsTags";
import { FeedsFollow } from "pages/feedsFollow";
import { CreateArticle } from "pages/createArticle";
import { Article } from "pages/article";
import { Autentifications } from "pages/autentifications";
import { Settings } from "pages/settings";
import { UserProfile } from "pages/userProfile";
import { EditArticle } from "pages/editArticle";

export default () => {
  return (
    <Switch>
      <Route path="/" component={FeedsGlobal} exact />
      <PrivatRoute path="/feedFollow" component={FeedsFollow} />
      <Route path="/feedTags/:tagName" component={FeedsTags} />

      <PrivatRoute path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug" component={Article} exact />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/login" component={Autentifications} />
      <Route path="/registration" component={Autentifications} />
      <PrivatRoute path="/settings" component={Settings} />
      <Route path="/profile/:slug" component={UserProfile} />

      <Route path="/registration" component={Autentifications} />

      <Route render={() => <div>404</div>} />
    </Switch>
  );
};
