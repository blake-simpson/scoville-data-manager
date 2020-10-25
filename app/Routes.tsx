/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteMapping } from './constants/routes';
import App from './components/App';
import ChillisPage from './pages/ChillisPage';
import EditChilliPage from './pages/EditChilliPage';
import SaucesPage from './pages/SaucesPage';

const Routes = () => {
  return (
    <App>
      <Redirect path={RouteMapping.HOME} to={RouteMapping.CHILLIS} />
      <Switch>
        <Route path={RouteMapping.CHILLIS} component={ChillisPage} exact />
        <Route path={RouteMapping.EDIT_CHILLI} component={EditChilliPage} />
        <Route path={RouteMapping.SAUCES} component={SaucesPage} exact />
      </Switch>
    </App>
  );
};

export default Routes;
