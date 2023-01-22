import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './layout.module.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { setMode } from '../../store/mode';
import Backdrop from '../sideBar/Backdrop';

const Layout = ({ children }) => {
  const { mode } = useSelector((state) => state.mode);
  const { backDrop } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMode('dark'));
  }, []);
  return (
    <Fragment>
      <Navbar />
      {backDrop && <Backdrop />}

      <div
        className={
          mode !== 'dark'
            ? classes.layoutWrapper
            : `${classes.layoutWrapper} ${classes.layoutWrapperDark}`
        }
      >
        {children}
      </div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
