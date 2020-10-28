import {
  ToastActionTypes,
  ShowToastAction,
  ShowToastOptions,
  HideToastAction,
} from '../../types/redux/actions';

export const showToast = (options: ShowToastOptions): ShowToastAction => {
  return {
    type: ToastActionTypes.SHOW_TOAST,
    payload: options,
  };
};

export const hideToast = (): HideToastAction => {
  return {
    type: ToastActionTypes.HIDE_TOAST,
  };
};
