import React from "react";
import { Switch, Route } from "react-router-dom";

import { FeedsLine } from "pages/feedsLine";

import { GlobalFeed } from "pages/globalFeed";
import { FeedsFollow } from "pages/feedsFollow";
import { TagFeed } from "pages/tagFeed";

import { CreateArticle } from "pages/createArticle";
import { Article } from "pages/article";

import { Autentifications } from "pages/autentifications";
import { Settings } from "pages/settings";
import { UserProfile } from "pages/userProfile";
/* 

import { EditArticle } from "pages/editArticle";


import { PrivatRoute } from "routes/privatRoute"; */

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={FeedsLine} exact />
        <Route path="/feedFollow" component={FeedsLine} />
        <Route path="/feedTags/:tagName" component={FeedsLine} />
        {/* <Route path="/" component={GlobalFeed} exact />
        
        <Route path="/feed" component={FeedsFollow} />
        <Route path="/tags/:tagName" component={TagFeed} /> */}

        <Route path="/articles/new" component={CreateArticle} />
        <Route path="/articles/:slug" component={Article} />

        <Route path="/login" component={Autentifications} />
        <Route path="/registration" component={Autentifications} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile/:slug" component={UserProfile} />
        {/* <Route path="/articles/:slug/edit" component={EditArticle} />
       
        
        <Route path="/registration" component={Autentifications} />
        
        
        
        <Route render={() => <div>404</div>} /> */}
      </Switch>
    </div>
  );
};
