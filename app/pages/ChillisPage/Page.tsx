import React from 'react';
import { useSelector } from 'react-redux';

import { allChilliIds } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';

import Row from './Row';

const ChillisPage = () => {
  const ids = useSelector((state: AppState) => allChilliIds(state));

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ids.map(id => <Row key={id} id={id} />)}
        </tbody>
      </table>
    </main>
  );
};

export default ChillisPage;
