import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './layout.module.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  const { mode } = useSelector((state) => state.mode);

  return (
    <Fragment>
      <Navbar />
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
