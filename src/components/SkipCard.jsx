import React from 'react';
import PropTypes from 'prop-types';

const SkipCard = ({ id, area, description }) => (
  <div data-testid={id} key={id}>
    <h2>{area}</h2>
    <p>{description}</p>
  </div>
);

SkipCard.propTypes = {
  id: PropTypes.number.isRequired,
  area: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkipCard;
