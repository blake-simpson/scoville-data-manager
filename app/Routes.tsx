/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './components/App';
import ChillisPage from './pages/ChillisPage';
import SaucesPage from './pages/SaucesPage';

export default function Routes () {
  return (
    <App>
      <Redirect path={routes.HOME} to={routes.CHILLIS} />
      <Switch>
        <Route path={routes.CHILLIS} exact component={ChillisPage} />
        <Route path={routes.SAUCES} exact component={SaucesPage} />
      </Switch>
    </App>
  );
}
