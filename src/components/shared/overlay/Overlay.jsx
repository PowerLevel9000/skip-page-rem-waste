import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Overlay = () => {
  const { selectedSkip: userSelectedID, skipData } = useSelector((state) => state.skipData);
  const selectedSkip = skipData.find((skip) => skip.id === userSelectedID);
  if (!selectedSkip) return null;
  return (
    <footer className="overlay">
      <div>

        <span>
          {selectedSkip.price_before_vat}
          £
        </span>

        <span>{selectedSkip.area}</span>
        <span>
          {selectedSkip.size}
          {' '}
          yard
        </span>
      </div>
      <button type="button">Continue</button>
    </footer>
  );
};

export default Overlay;
