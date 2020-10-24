import { ChillisActionTypes, ChillisActions } from './chillis';
import { SaucesActionTypes, SaucesActions } from './sauces';

export * from './chillis';
export * from './sauces';

export type ActionTypes = ChillisActionTypes | SaucesActionTypes;
export type Actions = ChillisActions | SaucesActions;
