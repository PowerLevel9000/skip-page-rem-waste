import React from 'react';
import PropTypes from 'prop-types';

const SkipCard = ({
  id,
  size,
  periodDays,
  priceBeforeVat,
  vat,
  postcode,
  transportCost,
  perTonneCost,
  forbidden,
  heavyWaste,
  onRoad,
  area,
}) => (
  <div data-testid={id} key={id}>
    <h2>
      {size}
      {' '}
      Yard
    </h2>
    <p>
      {periodDays}
      {' '}
      Days
    </p>
    <p>
      {priceBeforeVat}
      £
    </p>
    <p>
      {vat}
    </p>
    <p>{area}</p>
    <div>
      <p>{postcode}</p>
      <p>{transportCost}</p>
      <p>{perTonneCost}</p>
      <p>{forbidden}</p>
      <p>{heavyWaste}</p>
      <p>{onRoad}</p>
    </div>
  </div>
);

SkipCard.propTypes = {
  id: PropTypes.number.isRequired,
  area: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  periodDays: PropTypes.number.isRequired,
  priceBeforeVat: PropTypes.number.isRequired,
  vat: PropTypes.number.isRequired,
  postcode: PropTypes.string.isRequired,
  transportCost: PropTypes.number,
  perTonneCost: PropTypes.number,
  forbidden: PropTypes.bool.isRequired,
  heavyWaste: PropTypes.bool.isRequired,
  onRoad: PropTypes.bool.isRequired,
};

SkipCard.defaultProps = {
  transportCost: 0,
  perTonneCost: 0,
};

export default SkipCard;
