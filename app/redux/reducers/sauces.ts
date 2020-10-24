import { uniq } from 'lodash';

import { SaucesState } from '../../types/redux/state';
import { Actions, SaucesActionTypes } from '../../types/redux/actions';

const initialState: SaucesState = {
  byId: {},
  allIds: [],
};

function saucesReducer (state: SaucesState = initialState, action: Actions) {
  switch (action.type) {
    case SaucesActionTypes.SAUCES_LOADED:
      return {
        byId: {
          ...state.byId,
          ...action.payload.entities.sauce,
        },
        allIds: uniq([
          ...state.allIds,
          ...action.payload.result,
        ]),
      };

    default:
      return state;
  }
}

export default saucesReducer;
