import React from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

function Container({ name }) {
  return (
    <Element
      name={name}
      className="min-h-screen bg-gray-200 flex items-center justify-center"
    >
      <h1>{name}</h1>
    </Element>
  );
}
export default Container;

Container.propTypes = {
  name: PropTypes.string,
};

Container.defaultProps = {
  name: '',
};
