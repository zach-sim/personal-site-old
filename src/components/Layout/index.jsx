import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = props => (
  <Fragment>
    <Navbar />
    {props.children}
  </Fragment>
);
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default Layout;
