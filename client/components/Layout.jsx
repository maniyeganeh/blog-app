import React, { Fragment } from 'react';

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
