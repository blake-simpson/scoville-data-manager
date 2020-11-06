import { Action } from 'redux';

export enum ExportActionTypes {
  EXPORT_COMPLETE = 'EXPORT_COMPLETE',
  EXPORT_ERROR = 'EXPORT_ERROR',
}

export interface ExportCompleteAction extends Action {
  type: ExportActionTypes.EXPORT_COMPLETE;
}

export interface ExportErrorAction extends Action {
  type: ExportActionTypes.EXPORT_ERROR;
}

export type ExportActions = ExportCompleteAction
  | ExportErrorAction;
