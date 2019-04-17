import React from 'react';
import propTypes from 'prop-types';

/** A super lame component that says Hello with a custom message */
const HelloWorld = ({ message }) => {
  return <div>Hello {message}</div>;
};

HelloWorld.propTypes = {
  /** Message to display */
  message: propTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;
