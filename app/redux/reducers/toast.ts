import { ToastState } from '../../types/redux/state';
import { ToastDisplayTypes, Actions, ToastActionTypes } from '../../types/redux/actions';

const initialState: ToastState = {
  visible: false,
  text: '',
  displayAs: ToastDisplayTypes.SUCCESS,
};

function saucesReducer (state: ToastState = initialState, action: Actions) {
  switch (action.type) {
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
