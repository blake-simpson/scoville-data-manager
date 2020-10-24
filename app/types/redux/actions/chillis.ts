import { Action } from 'redux';

import { NormalizedChillis } from '../normalizers';

export enum ChillisActionTypes {
  CHILLIS_LOADED = 'CHILLIS_LOADED',
}

export interface ChillisLoadedAction extends Action {
  type: ChillisActionTypes.CHILLIS_LOADED;
  payload: NormalizedChillis;
}

export type ChillisActions = ChillisLoadedAction;
