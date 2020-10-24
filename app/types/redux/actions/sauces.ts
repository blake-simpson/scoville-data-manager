import { Action } from 'redux';

import { NormalizedSauces } from '../normalizers';

export enum SaucesActionTypes {
  SAUCES_LOADED = 'SAUCES_LOADED',
}

export interface SaucesLoadedAction extends Action {
  type: SaucesActionTypes.SAUCES_LOADED;
  payload: NormalizedSauces;
}

export type SaucesActions = SaucesLoadedAction;
