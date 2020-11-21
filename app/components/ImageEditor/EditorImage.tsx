import React from 'react';

import { IMAGES_DIR } from '../../services/FileService';
import { ChilliImage } from '../../types/resources';

import styles from './EditorImage.css';

interface Props {
  data: ChilliImage;
}

const buildFilePath = (path: ChilliImage['path']) => {
  return IMAGES_DIR.replace(/images$/, '') + path;
};

const EditorImage = ({ data }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={buildFilePath(data.path)} alt={data.title} className={styles.thumbnail} />
    </div>
  );
};

export default EditorImage;
