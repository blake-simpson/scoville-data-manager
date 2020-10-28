import { ToastDisplayTypes } from '../actions/toast';

export interface ToastState {
  visible: boolean;
  text: string;
  displayAs: ToastDisplayTypes;
}
