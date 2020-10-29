import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { allChilliIds } from '../../redux/selectors';
import { createChilli, showToast } from '../../redux/actions';

import { AppState } from '../../types/redux/state';
import { ToastDisplayTypes } from '../../types/redux/actions';

import Row from './Row';

const ChillisPage = () => {
  const dispatch = useDispatch();
  const ids = useSelector((state: AppState) => allChilliIds(state));

  const newChilli = () => {
    dispatch(createChilli());
    dispatch(showToast({ displayAs: ToastDisplayTypes.SUCCESS, text: 'New Chilli created!' }));
  };

  return (
    <main>
      <button type="button" className="new-button" onClick={newChilli}>New</button>

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
