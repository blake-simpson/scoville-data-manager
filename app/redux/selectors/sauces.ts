import { AppState } from '../../types/redux/state';
import { Sauce } from '../../types/resources';

export const allSauceIds = (state: AppState) => state.sauces.allIds;
export const allSauces = (state: AppState) => state.sauces.byId;
export const getSauceById = (state: AppState, id: Sauce['id']) => state.sauces.byId[id];
