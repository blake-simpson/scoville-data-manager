import { ToastState } from '../../types/redux/state';
import { ExportActionTypes, ToastDisplayTypes, Actions, ToastActionTypes } from '../../types/redux/actions';

const initialState: ToastState = {
  visible: false,
  text: '',
  displayAs: ToastDisplayTypes.SUCCESS,
};

function saucesReducer (state: ToastState = initialState, action: Actions) {
  switch (action.type) {
    case ExportActionTypes.EXPORT_COMPLETE:
      return {
        visible: true,
        text: 'Data backed up to Google Drive!',
        displayAs: ToastDisplayTypes.SUCCESS,
      };

    case ExportActionTypes.EXPORT_ERROR:
      return {
        visible: true,
        text: 'Backup failed. Please check your Google Drive structure.',
        displayAs: ToastDisplayTypes.ERROR,
      };

    case ToastActionTypes.SHOW_TOAST:
      return {
        visible: true,
        ...action.payload,
      };

    case ToastActionTypes.HIDE_TOAST:
      return initialState;

    default:
      return state;
  }
}

export default saucesReducer;
