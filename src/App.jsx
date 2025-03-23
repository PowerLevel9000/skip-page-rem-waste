import { useSelector } from 'react-redux';
import './App.scss';
import SkipCard from './components/skip-card/SkipCard';

function App() {
  const { skipData, selectedSkip } = useSelector((state) => state.skipData);
  return (
    <>
      <div className="top-heading">
        <h1>Choose Your Skip Size</h1>
        <p data-testid="description">Select the skip size that best suits your needs</p>
      </div>
      <div className="skip-container">
        {skipData.map((skip) => (
          <SkipCard
            key={skip.id}
            id={skip.id}
            size={skip.size}
            periodDays={skip.hire_period_days}
            priceBeforeVat={skip.price_before_vat}
            vat={skip.vat}
            area={skip.area}
            postcode={skip.postcode}
            transportCost={skip.transport_cost}
            perTonneCost={skip.per_tonne_cost}
            forbidden={skip.forbidden}
            heavyWaste={skip.allows_heavy_waste}
            onRoad={skip.allowed_on_road}
          />
        ))}
      </div>
      {selectedSkip && <div className="selected-skip-container">{selectedSkip}</div>}
    </>
  );
}

export default App;
