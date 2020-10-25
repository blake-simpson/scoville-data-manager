import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';

import { getChilliById } from '../../redux/selectors';
import { AppState } from '../../types/redux/state';

type NavigationParams = {
  id: string;
}

const EditChilliPage = () => {
  const navParams = useParams<NavigationParams>();
  const id = parseInt(navParams.id, 10);
  const chilli = useSelector((state: AppState) => getChilliById(state, id));

  return (
    <main className="content-page">
      <BackButton />
      <h2>Edit Chilli</h2>

      <p>
        ID: #
        {chilli.id}
      </p>
    </main>
  );
};

export default EditChilliPage;
