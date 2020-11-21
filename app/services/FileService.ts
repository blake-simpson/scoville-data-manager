import os from 'os';
import fs from 'fs';

import { Chilli, Sauce } from '../types/resources';
import { ChillisState, SaucesState } from '../types/redux/state';
import { DenormalizedChillis, DenormalizedSauces } from '../types/redux/normalizers';
import { store } from '../redux/store';
import { chillisLoaded, saucesLoaded, exportComplete, exportError } from '../redux/actions';
import { denormalizeChillis, denormalizeSauces } from '../redux/normalizers';

export const HOME_DIR = os.homedir();
export const DATA_DIR = `${HOME_DIR}/Google Drive/scoville-ranking-data`;
export const JSON_DIR = `${DATA_DIR}/data`;
export const IMAGES_DIR = `${DATA_DIR}/images`;

const encodingOptions = { encoding: 'utf8' };

export const loadData = () => {
  let chillis: Chilli[] = [];
  let sauces: Sauce[] = [];

  fs.readFile(`${JSON_DIR}/chillis.json`, encodingOptions, (err, data) => {
    if (!err) {
      chillis = JSON.parse(data);
    }

    store.dispatch(chillisLoaded(chillis));
  });

  fs.readFile(`${JSON_DIR}/sauces.json`, encodingOptions, (err, data) => {
    if (!err) {
      sauces = JSON.parse(data);
    }

    store.dispatch(saucesLoaded(sauces));
  });
};

const saveSauces = (sauces: DenormalizedSauces) => {
  fs.writeFile(`${JSON_DIR}/sauces.json`, JSON.stringify(sauces), encodingOptions, (err) => {
    if (err) {
      store.dispatch(exportError());
    } else {
      store.dispatch(exportComplete());
    }
  });
};

const saveChillis = (chillis: DenormalizedChillis, sauces: DenormalizedSauces) => {
  fs.writeFile(`${JSON_DIR}/chillis.json`, JSON.stringify(chillis), encodingOptions, (err) => {
    if (err) {
      store.dispatch(exportError());
    } else {
      saveSauces(sauces);
    }
  });
};

export const exportAllData = (chillisState: ChillisState, saucesState: SaucesState) => {
  const chillis = denormalizeChillis(chillisState);
  const sauces = denormalizeSauces(saucesState);

  saveChillis(chillis, sauces);
};
