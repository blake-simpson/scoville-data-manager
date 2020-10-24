import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Layout.css';

export default function SaucesPage () {
  return (
    <main className={styles.container}>
      <h1>Sauces</h1>
      <Link to={routes.CHILLIS}>Chillis</Link>
      <Link to={routes.SAUCES}>Sauces</Link>
    </main>
  );
}
