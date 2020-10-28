import { ChillisState } from './chillis';
import { SaucesState } from './sauces';
import { ToastState } from './toast';

export type AppState = {
  chillis: ChillisState;
  sauces: SaucesState;
  toast: ToastState;
};

export * from './chillis';
export * from './sauces';
export * from './toast';
