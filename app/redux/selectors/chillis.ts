import { AppState } from '../../types/redux/state';
import { Chilli } from '../../types/resources';

export const allChilliIds = (state: AppState) => state.chillis.allIds;
export const getChilliById = (state: AppState, id: Chilli['id']) => state.chillis.byId[id];
