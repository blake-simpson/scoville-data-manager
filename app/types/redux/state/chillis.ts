import { Chilli } from '../../resources';

export interface ChillisState {
  byId: Record<Chilli['id'], Chilli>;
  allIds: Array<Chilli['id']>;
}
