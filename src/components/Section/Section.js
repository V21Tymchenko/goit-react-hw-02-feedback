import React from 'react';
import { Title } from './Section.styled.jsx';
import Box from '../Box/Box.jsx';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Box ml={'auto'} mr={'auto'}>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
