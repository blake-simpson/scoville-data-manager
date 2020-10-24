import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Layout.css';

import { allChilliIds } from '../redux/selectors';

import { AppState } from '../types/redux/state';

export default function ChillisPage () {
  const chilliIds = useSelector((state: AppState) => allChilliIds(state));

  return (
    <main className={styles.container}>
      <h1>Chillis</h1>

      <ul>
        {chilliIds.map(id => <li key={id}>{id}</li>)}
      </ul>

      <Link to={routes.CHILLIS}>Chillis</Link>
      <Link to={routes.SAUCES}>Sauces</Link>
    </main>
  );
}
