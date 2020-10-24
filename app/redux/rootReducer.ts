import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import chillisReducer from './reducers/chillis';
import saucesReducer from './reducers/sauces';

export default function createRootReducer (history: History) {
  return combineReducers({
    router: connectRouter(history),
    chillis: chillisReducer,
    sauces: saucesReducer,
  });
}
