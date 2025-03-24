import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedSkip, setModelDetail, toggleModelView } from '../../redux/skip-slice/skipDataSlice';
import yard from '../../static/dumpyard.jpg';
import './style.scss';

const SkipCard = ({
  id,
  size,
  periodDays,
  priceBeforeVat,
  vat,
  transportCost,
  perTonneCost,
}) => {
  const selected = useSelector((state) => state.skipData.selectedSkip);
  const dispatch = useDispatch();
  return (
    <div data-testid={id} key={id} className="skip-card">
      <img src={yard} alt="yard" />
      <div className="info">
        <span>
          {size}
          {' '}
          Yard
        </span>
      </div>

      <div className="card-t">
        <h2>
          {size}
          {' '}
          Yard
        </h2>
        <span>
          {periodDays}
          {' '}
          Days
        </span>
      </div>

      <ul>
        <li>
          price
          <span>
            {priceBeforeVat}
            £
          </span>
        </li>
        <li>
          VAT
          <span>
            {vat}
            %
          </span>
        </li>
        {transportCost > 0 && (
          <li>
            Transport Cost
            <span>{transportCost}</span>
          </li>
        )}
        {perTonneCost > 0 && (
          <li>
            Per Tonne Cost
            <span>{perTonneCost}</span>
          </li>
        )}
      </ul>
      <div className="buttons">
        <button
          type="button"
          onClick={() => {
            dispatch(toggleModelView());
            dispatch(setModelDetail(id));
          }}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(toggleModelView());
            dispatch(setSelectedSkip(id));
          }}
        >
          {selected === id ? 'selected' : 'select'}
        </button>
      </div>
    </div>
  );
};

SkipCard.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  periodDays: PropTypes.number.isRequired,
  priceBeforeVat: PropTypes.number.isRequired,
  vat: PropTypes.number.isRequired,
  transportCost: PropTypes.number,
  perTonneCost: PropTypes.number,
};

SkipCard.defaultProps = {
  transportCost: 0,
  perTonneCost: 0,
};

export default SkipCard;
