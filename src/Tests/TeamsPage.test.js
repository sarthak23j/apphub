import { render, screen } from '@testing-library/react';
import TeamsPage from '../Pages/TeamsPage';

describe('TeamsPage', () => {
    const mockProps = {
        setPageState: jest.fn(),
        openApp: jest.fn()
    };

    test('renders Teams Page', () => {
        render(<TeamsPage {...mockProps} />);
        expect(screen.getByText(/Microsoft Teams/i)).toBeInTheDocument();
    });
});