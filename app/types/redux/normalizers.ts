import { ChillisState, SaucesState } from './state';
import { Chilli, Sauce } from '../resources';

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

export interface DenormalizedChillis {
  data: Chilli[]
}

export interface DenormalizedSauces {
  data: Sauce[]
}
