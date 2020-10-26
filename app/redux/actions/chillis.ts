import { normalizeChillis } from '../normalizers';

import { Chilli } from '../../types/resources';
import {
  ChillisActionTypes,
  ChillisLoadedAction,
  UpdateChilliAction,
} from '../../types/redux/actions';

export const chillisLoaded = (data: Chilli[]): ChillisLoadedAction => {
  return {
    type: ChillisActionTypes.CHILLIS_LOADED,
    payload: normalizeChillis(data),
  };
};

export const updateChilli = (chilli: Chilli): UpdateChilliAction => {
  return {
    type: ChillisActionTypes.UPDATE_CHILLI,
    payload: chilli,
  };
};
