import { normalize, denormalize, schema } from 'normalizr';

import { Chilli, Sauce } from '../types/resources';
import {
  NormalizedChillis,
  NormalizedSauces,
  DenormalizedChillis,
  DenormalizedSauces,
} from '../types/redux/normalizers';
import { ChillisState, SaucesState } from '../types/redux/state';

const chilliSchema = new schema.Entity('chilli');
const sauceSchema = new schema.Entity('sauce');

export const normalizeChillis = (data: Chilli[]): NormalizedChillis => {
  return normalize(data, [chilliSchema]);
};

export const normalizeSauces = (data: Sauce[]): NormalizedSauces => {
  return normalize(data, [sauceSchema]);
};

export const denormalizeChillis = (chillis: ChillisState): DenormalizedChillis => {
  return denormalize(chillis.allIds, [chilliSchema], { chilli: chillis.byId });
};

export const denormalizeSauces = (sauces: SaucesState): DenormalizedSauces => {
  return denormalize(sauces.allIds, [sauceSchema], { sauce: sauces.byId });
};
