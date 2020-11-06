import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../types/redux/state';

import { exportAllData } from '../../services/FileService';

import styles from './ExportControl.css';

const ExportControl = () => {
  const chillisState = useSelector((state: AppState) => state.chillis);
  const saucesState = useSelector((state: AppState) => state.sauces);

  const beginExport = () => {
    exportAllData(chillisState, saucesState);
  };

  return (
    <button type="button" className={styles.button} onClick={beginExport}>Export and Save</button>
  );
};

export default ExportControl;
