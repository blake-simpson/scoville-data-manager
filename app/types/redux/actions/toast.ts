import { Action } from 'redux';

export enum ToastActionTypes {
  SHOW_TOAST = 'SHOW_TOAST',
  HIDE_TOAST = 'HIDE_TOAST',
}

export enum ToastDisplayTypes {
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ShowToastOptions = {
  displayAs: ToastDisplayTypes;
  text: string;
};

export interface ShowToastAction extends Action {
  type: ToastActionTypes.SHOW_TOAST;
  payload: ShowToastOptions;
}

export interface HideToastAction extends Action {
  type: ToastActionTypes.HIDE_TOAST;
}

export type ToastActions = ShowToastAction
  | HideToastAction;
