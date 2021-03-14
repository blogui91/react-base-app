import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import LoginView from "views/Login";
import AboutUsView from "views/AboutUs";
import HomeView from "views/Home";
import AppLayout from "Layouts/AppLayout";
import SignupView from "views/Signup";

/**
 * List of routes
 *
 * @var AppRoute
 */
export enum AppRoute {
  HOME = '/',
  LOGIN = '/login',
  SIGNUP = '/signup',
  ABOUT = '/about',
};


export const AuthStack = () => (
  <Switch>
    <Route exact path={AppRoute.LOGIN} component={LoginView} />
    <Route path={AppRoute.SIGNUP} component={SignupView} />
    <Redirect to={{pathname: AppRoute.LOGIN}} />
  </Switch>
);

export const AppStack = () => (
  <AppLayout>
    <Switch>
      <Route exact path={AppRoute.HOME} component={HomeView} />
      <Route path={AppRoute.ABOUT} component={AboutUsView} />
      <Redirect to={{pathname: AppRoute.HOME}} />
    </Switch>
  </AppLayout>
);
