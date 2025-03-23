import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';
import { data } from './utils/data';

describe('App Component', () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      skipData: {
        skipData: data,
        selectedSkip: {},
      },
    });
  });
  it('renders App component with skip heading', () => {
    render(<Provider store={store}><App /></Provider>);
    const headingData = screen.getByText(/Choose Your Skip Size/i);
    const headingElement = screen.getByRole('heading', { name: /Choose Your Skip Size/i });
    expect(headingData).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
  it('renders App component with skip heading', () => {
    render(<Provider store={store}><App /></Provider>);
    const descriptionData = screen.getByText(/Select the skip size that best suits your needs/i);
    const descriptionElement = screen.getByTestId('description');
    expect(descriptionData).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});

describe('App Component render every skips', () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      skipData: {
        skipData: data,
        selectedSkip: {},
      },
    });
  });

  it('renders App component with skip heading', () => {
    const skipData = data;
    render(<Provider store={store}><App /></Provider>);
    skipData.forEach((skip) => {
      const skipElement = screen.getByTestId(skip.id);
      expect(skipElement).toBeInTheDocument();
    });
  });
});
