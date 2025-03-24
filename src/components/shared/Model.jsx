import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dump from '../../static/dumpyard.jpg';
import './style.scss';
import { setSelectedSkip, toggleModelView } from '../../redux/skip-slice/skipDataSlice';

const Model = ({ id }) => {
  const dispatch = useDispatch();
  const { skipData, model, selectedSkip: skipByUser } = useSelector((state) => state.skipData);
  const selectedSkip = skipData.find((skip) => skip.id === id);
  if (!selectedSkip) return null;
  const handleClose = () => {
    dispatch(toggleModelView());
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    // disabled eslint for this file because it is a model and it is not a
    // good practice to use button inside a div
    // eslint-disable-next-line
    <div className="backdrop-container" role='button' onClick={handleClose} style={{ display: model ? 'flex' : 'none' }}>
      {/* eslint-disable-next-line */}
      <div className="model" onClick={stopPropagation}>
        <div className="img-wrapper">
          <img src={dump} alt="dump yard" />
        </div>
        <div className="description-container">
          <div className="title">
            <h2>{selectedSkip.area}</h2>
            <h2>
              {selectedSkip.size}
              {' '}
              yard
            </h2>
          </div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aperiam ipsum.
            Eveniet dolorum est dolore id possimus laboriosam consequuntur explicabo eaque atque,
            aspernatur illo! Laudantium excepturi aut autem? In, quasi.
          </p>
          <ul>
            <li>
              Price
              <span>{selectedSkip.price_before_vat}</span>
            </li>
            <li>
              VAT
              <span>
                {selectedSkip.vat}
                %
              </span>
            </li>
            {selectedSkip?.transport_cost && (
              <li>
                Transport Cost
                <span>
                  {selectedSkip.transport_cost}
                  £
                </span>
              </li>
            )}
            {selectedSkip?.per_tonne_cost && (
              <li>
                Per Tone Cost
                <span>
                  {selectedSkip.per_tonne_cost}
                  £
                </span>
              </li>
            )}
          </ul>
          <ul className="highlighted-feature">
            <li>
              {selectedSkip.allows_heavy_waste ? 'perfect for heavy waste' : "heavy can't dump here"}
            </li>
            <li>
              {selectedSkip.allowed_on_road ? 'on road facility available' : 'on road facility not available'}
            </li>
          </ul>
          <div className="buttons">
            <button type="button" onClick={handleClose}>close</button>
            <button type="button" onClick={() => { dispatch(setSelectedSkip(selectedSkip.id)); }}>{skipByUser === id ? 'selected' : 'select'}</button>
          </div>
        </div>
      </div>
    </div>

  );
};

Model.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Model;
