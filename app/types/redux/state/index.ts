import { ChillisState } from './chillis';
import { SaucesState } from './sauces';

export type AppState = {
  chillis: ChillisState;
  sauces: SaucesState;
};

export * from './chillis';
export * from './sauces';
