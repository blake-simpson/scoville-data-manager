import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './BackButton.css';

const BackButton = () => {
  const history = useHistory();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => history.goBack()}
    >
      &laquo;
    </button>
  );
};

export default BackButton;
