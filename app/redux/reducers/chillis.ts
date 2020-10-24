import { uniq } from 'lodash';

import { ChillisState } from '../../types/redux/state';
import { Actions, ChillisActionTypes } from '../../types/redux/actions';

const initialState: ChillisState = {
  byId: {},
  allIds: [],
};

function chillisReducer (state: ChillisState = initialState, action: Actions) {
  switch (action.type) {
    case ChillisActionTypes.CHILLIS_LOADED:
      return {
        byId: {
          ...state.byId,
          ...action.payload.entities.chilli,
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

export default chillisReducer;