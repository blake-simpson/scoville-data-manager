import React from 'react';
import { useSelector } from 'react-redux';

import { allSauceIds } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';

import Row from './Row';

const SaucesPage = () => {
  const ids = useSelector((state: AppState) => allSauceIds(state));

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Scoville</th>
          </tr>
        </thead>
        <tbody>
          {ids.map(id => <Row key={id} id={id} />)}
        </tbody>
      </table>
    </main>
  );
};

export default SaucesPage;
