/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import About from '../../components/About';
import Schedule from '../../components/Speakers';
import Speakers from '../../components/Schedule';
import Header from '../../components/shared/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Header className="header" />

      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/speakers" component={Speakers} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </Fragment>
  );
}
