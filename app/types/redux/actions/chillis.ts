import { Action } from 'redux';

import { NormalizedChillis } from '../normalizers';
import { Chilli } from '../../resources';

export enum ChillisActionTypes {
  CHILLIS_LOADED = 'CHILLIS_LOADED',
  UPDATE_CHILLI = 'UPDATE_CHILLI',
}

export interface ChillisLoadedAction extends Action {
  type: ChillisActionTypes.CHILLIS_LOADED;
  payload: NormalizedChillis;
}

export interface UpdateChilliAction extends Action {
  type: ChillisActionTypes.UPDATE_CHILLI;
  payload: Chilli;
}

export type ChillisActions = ChillisLoadedAction
  | UpdateChilliAction;
