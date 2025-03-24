import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { data } from '../../utils/data';
import SkipCard from './SkipCard';
import { Provider } from 'react-redux';

describe('SkipCard', () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      skipData: {
        skipData: data,
        selectedSkip: {},
      },
    });
    render(
      <Provider store={store}>
        <SkipCard key={data[data.length - 1].id}
          id={data[data.length - 1].id}
          size={data[data.length - 1].size}
          periodDays={data[data.length - 1].hire_period_days}
          priceBeforeVat={data[data.length - 1].price_before_vat}
          vat={data[data.length - 1].vat}
          area={data[data.length - 1].area}
          postcode={data[data.length - 1].postcode}
          transportCost={data[data.length - 1].transport_cost}
          perTonneCost={data[data.length - 1].per_tonne_cost}
          forbidden={data[data.length - 1].forbidden}
          heavyWaste={data[data.length - 1].allows_heavy_waste}
          onRoad={data[data.length - 1].allowed_on_road}
        />
      </Provider>
    );
  });
  it('renders SkipCard component', () => {
    const size = screen.getAllByText(RegExp(`${data[data.length - 1].size} Yard`, 'i'));
    const vat = screen.getByText(RegExp(data[data.length - 1].vat, 'i'));
    const price = screen.getByText(RegExp(data[data.length - 1].price_before_vat, 'i'));
    expect(size.length).toBeGreaterThan(0);
    expect(vat).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});


describe('Details modal dispatch id and Selected Model dispatch id', () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      skipData: {
        skipData: data,
        selectedSkip: null,
        detail: null,
        model: false,
      },
    });

    render(
      <Provider store={store}>
        <SkipCard key={data[data.length - 1].id}
          id={data[data.length - 1].id}
          size={data[data.length - 1].size}
          periodDays={data[data.length - 1].hire_period_days}
          priceBeforeVat={data[data.length - 1].price_before_vat}
          vat={data[data.length - 1].vat}
          area={data[data.length - 1].area}
          postcode={data[data.length - 1].postcode}
          transportCost={data[data.length - 1].transport_cost}
          perTonneCost={data[data.length - 1].per_tonne_cost}
          forbidden={data[data.length - 1].forbidden}
          heavyWaste={data[data.length - 1].allows_heavy_waste}
          onRoad={data[data.length - 1].allowed_on_road}
        />
      </Provider>
    );
  });
  it('details dispatch id', () => {
    const detailButton = screen.getByText(/Details/i);
    expect(detailButton).toBeInTheDocument();
    detailButton.click();
    const actions = store.getActions();
    const detailAction = actions.find(action => action.type === 'skipData/setModelDetail');
    const modelAction = actions.find(action => action.type === 'skipData/toggleModelView');
    expect(modelAction).toBeDefined();
    expect(detailAction).toBeDefined();
    expect(detailAction.payload).toEqual(data[data.length - 1].id);
  });

  it('Select dispatch id', () => {
    const selectButton = screen.getByText(/Select/i);
    expect(selectButton).toBeInTheDocument();
    selectButton.click();
    const actions = store.getActions();
    const selectAction = actions.find(action => action.type === 'skipData/setSelectedSkip');
    const modelAction = actions.find(action => action.type === 'skipData/toggleModelView');
    expect(modelAction).toBeDefined();
    expect(selectAction).toBeDefined();
    expect(selectAction.payload).toEqual(data[data.length - 1].id);
  });
});