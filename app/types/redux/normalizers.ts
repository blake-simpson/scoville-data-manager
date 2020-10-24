import { ChillisState, SaucesState } from './state';

export interface NormalizedChillis {
  entities: {
    chilli: {
      [key: number]: ChillisState;
    };
  };
  result: number[];
}

export interface NormalizedSauces {
  entities: {
    sauce: {
      [key: number]: SaucesState;
    };
  };
  result: number[];
}
