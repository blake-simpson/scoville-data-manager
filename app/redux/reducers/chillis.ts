import { uniq } from 'lodash';

import { ChillisState } from '../../types/redux/state';
import { Actions, ChillisActionTypes } from '../../types/redux/actions';

const initialState: ChillisState = {
  byId: {},
  allIds: [],
};

const getHighestId = (state: ChillisState): number => {
  return Math.max.apply(null, state.allIds);
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

    case ChillisActionTypes.CREATE_CHILLI:
      const newId = getHighestId(state) + 1;

      return {
        ...state,
        byId: {
          ...state.byId,
          [newId]: {
            id: newId,
            slug: '',
            name: '',
            scoville: {},
          },
        },
        allIds: uniq([
          ...state.allIds,
          newId,
        ]),
      };

    case ChillisActionTypes.UPDATE_CHILLI:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}

export default chillisReducer;
