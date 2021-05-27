import React from 'react';

import logo from '../assets/logo-white.png';

function Logo({ h }) {
  const styles = {
    height: h,
  };

  return <img style={styles} src={logo} />;
}

export default Logo;
