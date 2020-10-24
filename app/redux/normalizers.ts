import { normalize, schema } from 'normalizr';

import { Chilli, Sauce } from '../types/resources';
import { NormalizedChillis, NormalizedSauces } from '../types/redux/normalizers';

const chilliSchema = new schema.Entity('chilli');
const sauceSchema = new schema.Entity('sauce');

export const normalizeChillis = (data: Chilli[]): NormalizedChillis => {
  return normalize(data, [chilliSchema]);
};

export const normalizeSauces = (data: Sauce[]): NormalizedSauces => {
  return normalize(data, [sauceSchema]);
};
