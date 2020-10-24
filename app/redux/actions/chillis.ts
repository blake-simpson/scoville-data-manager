import { normalizeChillis } from '../normalizers';

import { Chilli } from '../../types/resources';
import {
  ChillisActionTypes,
  ChillisLoadedAction,
} from '../../types/redux/actions';

export const chillisLoaded = (data: Chilli[]): ChillisLoadedAction => {
  return {
    type: ChillisActionTypes.CHILLIS_LOADED,
    payload: normalizeChillis(data),
  };
};
