import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import chillisReducer from './chillis';
import saucesReducer from './sauces';
import toastReducer from './toast';

const createRootReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    chillis: chillisReducer,
    sauces: saucesReducer,
    toast: toastReducer,
  });
};

export default createRootReducer;
