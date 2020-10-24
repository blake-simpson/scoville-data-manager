import { Sauce } from '../../resources';

export interface SaucesState {
  byId: Record<Sauce['id'], Sauce>;
  allIds: Array<Sauce['id']>;
}
