import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import styles from './Toast.css';

import { currentToast } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';
import { hideToast } from '../../redux/actions';
import { ToastDisplayTypes } from '../../types/redux/actions';

const Toast = () => {
  const dispatch = useDispatch();
  const toastData = useSelector((state: AppState) => currentToast(state));

  const close = () => {
    dispatch(hideToast());
  };

  if (!toastData?.visible) {
    return null;
  }

  setTimeout(close, 3000);

  const typeStyles = {
    [styles.success]: toastData.displayAs === ToastDisplayTypes.SUCCESS,
    [styles.error]: toastData.displayAs === ToastDisplayTypes.ERROR,
  };

  return (
    <div className={classnames(styles.toast, typeStyles)}>
      <button type="button" onClick={close} className={styles.close}>&times;</button>
      <p>{toastData.text}</p>
    </div>
  );
};

export default Toast;
