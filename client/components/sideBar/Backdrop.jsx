import React from 'react';
import { useDispatch } from 'react-redux';
import { menuClose } from '../../store/menu';
import classes from './sideBar.module.css';
const Backdrop = () => {
  const dispatch = useDispatch();
  const menuCloseHandler = () => {
    dispatch(menuClose());
  };

  return <div className={classes.backdrop} onClick={menuCloseHandler} />;
};

export default Backdrop;
