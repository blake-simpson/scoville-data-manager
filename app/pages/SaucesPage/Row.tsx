import React from 'react';
import { useSelector } from 'react-redux';

import { getSauceById } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';
import { Chilli } from '../../types/resources';

interface Props {
  id: Chilli['id']
};

const Row = ({ id }: Props) => {
  const sauce = useSelector((state: AppState) => getSauceById(state, id));

  if (!sauce) {
    return null;
  }

  const { name, scoville } = sauce;

  return (
    <tr>
      <td>
        #
        {id}
      </td>
      <td>{name}</td>
      <td>{scoville}</td>
    </tr>
  );
};

export default Row;
