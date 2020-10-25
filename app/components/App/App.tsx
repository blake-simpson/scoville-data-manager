import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes.json';

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
        <NavLink to={routes.CHILLIS} activeClassName={styles.activeNav}>Chillis</NavLink>
        <NavLink to={routes.SAUCES} activeClassName={styles.activeNav}>Sauces</NavLink>
      </nav>

      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default App;
