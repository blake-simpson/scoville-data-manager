import { ChillisActionTypes, ChillisActions } from './chillis';
import { SaucesActionTypes, SaucesActions } from './sauces';
import { ToastActionTypes, ToastActions } from './toast';

export * from './chillis';
export * from './sauces';
export * from './toast';

export type ActionTypes = ChillisActionTypes | SaucesActionTypes | ToastActionTypes;
export type Actions = ChillisActions | SaucesActions | ToastActions;
