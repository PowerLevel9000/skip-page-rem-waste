import { render, screen } from '@testing-library/react';
import { data } from '../../utils/data';
import SkipCard from './SkipCard';

// test case will be written at the time of development
describe('SkipCard', () => {
    it('renders SkipCard component', () => {
        render(<SkipCard key={data[data.length - 1].id} {...data[data.length - 1]} />);
        const size = screen.getByText(RegExp(`${data[data.length - 1].size} Yard`, 'i'));
        const vat = screen.getByText(RegExp(data[data.length - 1].vat, 'i'));
        const area = screen.getByText(RegExp(data[data.length - 1].area, 'i'));
        expect(size).toBeInTheDocument();
        expect(vat).toBeInTheDocument();
        expect(area).toBeInTheDocument();
    });
});
