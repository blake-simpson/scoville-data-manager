import { ChillisState } from '../../types/redux/state/chillis';
import { Actions, ChillisActionTypes } from '../../types/redux/actions';

const initialState: ChillisState = {
  byId: {},
  allIds: [],
};

function chillisReducer (state: ChillisState = initialState, action: Actions) {
  switch (action.type) {
    case ChillisActionTypes.CHILLIS_LOADED:
      return {
        byId: {},
        allIds: action.payload.chillis.map(chilli => chilli.id),
      };

    default:
      return state;
  }
}

export default chillisReducer;
