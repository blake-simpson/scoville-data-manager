import React from 'react';
import { useSelector } from 'react-redux';

import { getChilliById } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';
import { Chilli } from '../../types/resources';

import EditorImage from './EditorImage';

import styles from './ImageEditor.css';

interface Props {
  chilliId: Chilli['id'];
}

const ImageEditor = ({ chilliId }: Props) => {
  const chilli = useSelector((state: AppState) => getChilliById(state, chilliId));

  return (
    <div className={styles.wrapper}>
      <h3>Images</h3>

      <div className={styles.images}>
        {chilli.images?.map(data => <EditorImage key={data.path} data={data} />)}
      </div>
    </div>
  );
};

export default ImageEditor;
