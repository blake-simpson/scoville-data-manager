import { Chilli } from '../types/resources';
import { store } from '../redux/store';
import { chillisLoaded } from '../redux/actions';

const loadData = () => {
  const data: Chilli[] = [
    { id: 1, slug: 'foo', name: 'bar', description: '123', scoville: { maximum: 1000 } },
  ];

  store.dispatch(chillisLoaded(data));
};

export default {
  loadData,
};
