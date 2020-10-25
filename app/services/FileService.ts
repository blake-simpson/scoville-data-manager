import os from 'os';
import fs from 'fs';

import { Chilli, Sauce } from '../types/resources';
import { store } from '../redux/store';
import { chillisLoaded, saucesLoaded } from '../redux/actions';

const HOME_DIR = os.homedir();
const DATA_DIR = `${HOME_DIR}/Google Drive/scoville-ranking-data`;
const JSON_DIR = `${DATA_DIR}/data`;
// const IMAGES_DIR = `${DATA_DIR}/images`;

const loadData = () => {
  let chillis: Chilli[] = [];
  let sauces: Sauce[] = [];

  fs.readFile(`${JSON_DIR}/chillis.json`, { encoding: 'utf8' }, (err, data) => {
    if (!err) {
      chillis = JSON.parse(data);
    }

    store.dispatch(chillisLoaded(chillis));
  });

  fs.readFile(`${JSON_DIR}/sauces.json`, { encoding: 'utf8' }, (err, data) => {
    if (!err) {
      sauces = JSON.parse(data);
    }

    store.dispatch(saucesLoaded(sauces));
  });
};

export default {
  loadData,
};
