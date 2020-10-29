import { Action } from 'redux';

import { NormalizedChillis } from '../normalizers';
import { Chilli } from '../../resources';

export enum ChillisActionTypes {
  CHILLIS_LOADED = 'CHILLIS_LOADED',
  CREATE_CHILLI = 'CREATE_CHILLI',
  UPDATE_CHILLI = 'UPDATE_CHILLI',
}

export interface ChillisLoadedAction extends Action {
  type: ChillisActionTypes.CHILLIS_LOADED;
  payload: NormalizedChillis;
}

export interface CreateChilliAction extends Action {
  type: ChillisActionTypes.CREATE_CHILLI;
}

export interface UpdateChilliAction extends Action {
  type: ChillisActionTypes.UPDATE_CHILLI;
  payload: Chilli;
}

export type ChillisActions = ChillisLoadedAction
  | CreateChilliAction
  | UpdateChilliAction;
