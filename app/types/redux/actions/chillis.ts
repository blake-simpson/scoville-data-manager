import { Action } from 'redux';

import { Chilli } from '../../resources';

export enum ChillisActionTypes {
  CHILLIS_LOADED = 'CHILLIS_LOADED',
}

export interface ChillisLoadedAction extends Action {
  type: ChillisActionTypes.CHILLIS_LOADED;
  payload: {
    chillis: Chilli[];
  };
}

export type ChillisActions = ChillisLoadedAction;
