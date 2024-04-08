// withNavigation.js
import React from 'react';
import Navigation from '../navigation/navigation';

const withNavigation = (Component) => {
  return (props) => (
    <>
      <Navigation />
      <Component {...props} />
    </>
  );
};

export default withNavigation;
