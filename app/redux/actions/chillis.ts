import { normalizeChillis } from '../normalizers';

import { Chilli } from '../../types/resources';
import {
  ChillisActionTypes,
  ChillisLoadedAction,
  CreateChilliAction,
  UpdateChilliAction,
} from '../../types/redux/actions';

export const chillisLoaded = (data: Chilli[]): ChillisLoadedAction => {
  return {
    type: ChillisActionTypes.CHILLIS_LOADED,
    payload: normalizeChillis(data),
  };
};

export const createChilli = (): CreateChilliAction => {
  return {
    type: ChillisActionTypes.CREATE_CHILLI,
  };
};

export const updateChilli = (chilli: Chilli): UpdateChilliAction => {
  return {
    type: ChillisActionTypes.UPDATE_CHILLI,
    payload: chilli,
  };
};
