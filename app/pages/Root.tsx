import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../redux/store';
import Routes from '../Routes';

import { loadData } from '../services/FileService';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(Root);
