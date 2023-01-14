import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </Fragment>
  );
};

export default Layout;
