import { render, screen } from '@testing-library/react';
import WordPage from '../Pages/GroupElement';

describe('WordPage', () => {
    const mockProps = {
        setPageState: jest.fn(),
        openApp: jest.fn()
    };

    test('renders Word Page', () => {
        render(<WordPage {...mockProps} />);
        expect(screen.getByText(/Microsoft Word/i)).toBeInTheDocument();
    });
});