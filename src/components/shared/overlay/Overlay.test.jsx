import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Overlay from './Overlay';
import { render, screen } from '@testing-library/react';
import { data } from '../../../utils/data';
describe('Overlay', () => {
    const mockStore = configureMockStore();
    let store;
    beforeEach(() => {
        store = mockStore({
            skipData: {
                skipData: data,
                selectedSkip: data[data.length - 1].id,
            },
        });
        render(
            <Provider store={store}>
                <Overlay />
            </Provider>
        );
    });

    it('renders Overlay component', () => {
        const price = screen.getByText(RegExp(data[data.length - 1].price_before_vat, 'i'));
        const area = screen.getByText(RegExp(data[data.length - 1].area, 'i'));
        const size = screen.getByText(RegExp(data[data.length - 1].size, 'i'));
        expect(price).toBeInTheDocument();
        expect(area).toBeInTheDocument();
        expect(size).toBeInTheDocument();
    });
    it('should have continue button', () => {
        const button = screen.getByRole("button");
        const buttonText = screen.getByText(/continue/i);
        expect(buttonText).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});