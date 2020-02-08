import React from "react";
import { Switch, Route } from "react-router-dom";
import { Article } from "pages/article";
import { GlobalFeed } from "pages/globalFeed";
import { Autentifications } from "pages/autentifications";
import { TagFeed } from 'pages/tagFeed';
import { SelfFeed } from "pages/selfFeed";
import { CreateArticle } from 'pages/createArticle';
import { EditArticle } from 'pages/editArticle';
import { Settings } from 'pages/settings';
import { UserProfile } from 'components/userProfile';

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={GlobalFeed} exact />>
        <Route path="/profiles/:slug" component={UserProfile} exact />>
        <Route path="/profiles/:slug/favorited" component={UserProfile} />>
        <Route path="/articles/new" component={CreateArticle} />>
        <Route path="/articles/:slug/edit" component={EditArticle} />>
        <Route path="/tags/:tagName" component={TagFeed} />>
        <Route path="/feed" component={SelfFeed} />>
        <Route path="/registration" component={Autentifications} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Autentifications} />
        <Route path="/articles/:slug" component={Article} />>
      </Switch>
    </div>
  );
};