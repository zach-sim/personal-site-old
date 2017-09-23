import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default Layout;
