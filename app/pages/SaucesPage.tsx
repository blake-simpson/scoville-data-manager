import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Layout.css';

import { allSauceIds, allSauces } from '../redux/selectors';

import { AppState } from '../types/redux/state';

export default function SaucesPage () {
  const sauceIds = useSelector((state: AppState) => allSauceIds(state));
  const sauces = useSelector((state: AppState) => allSauces(state));

  return (
    <main className={styles.container}>
      <h1>Sauces</h1>

      <ul>
        {sauceIds.map(id => {
          const sauce = sauces[id];

          return (
            <li key={id}>{sauce.name}</li>
          );
        })}
      </ul>

      <Link to={routes.CHILLIS}>Chillis</Link>
      <Link to={routes.SAUCES}>Sauces</Link>
    </main>
  );
}
