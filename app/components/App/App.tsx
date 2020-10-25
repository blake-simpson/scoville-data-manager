import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { RouteMapping } from '../../constants/routes';

import styles from './App.css';

type Props = {
  children: ReactNode;
};

const App = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <h1>scovilleranking.com: Data Manager</h1>
      </header>

      <nav className={styles.nav}>
        <NavLink to={RouteMapping.CHILLIS} activeClassName={styles.activeNav}>Chillis</NavLink>
        <NavLink to={RouteMapping.SAUCES} activeClassName={styles.activeNav}>Sauces</NavLink>
      </nav>

      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default App;
