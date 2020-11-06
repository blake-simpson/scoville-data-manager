import {
  ExportActionTypes,
  ExportCompleteAction,
  ExportErrorAction,
} from '../../types/redux/actions';

export const exportComplete = (): ExportCompleteAction => {
  return {
    type: ExportActionTypes.EXPORT_COMPLETE,
  };
};

export const exportError = (): ExportErrorAction => {
  return {
    type: ExportActionTypes.EXPORT_ERROR,
  };
};
