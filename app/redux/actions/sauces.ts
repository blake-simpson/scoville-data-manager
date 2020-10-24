import { normalizeSauces } from '../normalizers';

import { Sauce } from '../../types/resources';
import {
  SaucesActionTypes,
  SaucesLoadedAction,
} from '../../types/redux/actions';

export const saucesLoaded = (data: Sauce[]): SaucesLoadedAction => {
  return {
    type: SaucesActionTypes.SAUCES_LOADED,
    payload: normalizeSauces(data),
  };
};
