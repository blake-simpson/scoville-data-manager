import React from 'react';
import { useSelector } from 'react-redux';

import { getChilliById } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';
import { Chilli } from '../../types/resources';

interface Props {
  id: Chilli['id']
};

const Row = ({ id }: Props) => {
  const chilli = useSelector((state: AppState) => getChilliById(state, id));

  if (!chilli) {
    return null;
  }

  const { name, slug } = chilli;

  return (
    <tr>
      <td>
        #
        {id}
      </td>
      <td>{name}</td>
      <td>{slug}</td>
    </tr>
  );
};

export default Row;