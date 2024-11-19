import { render, screen } from '@testing-library/react';
import AppHome from '../Pages/AppHome';

describe('AppHome', () => {
    const mockProps = {
        appList: { steam: true, word: false, office: false, teams: false },
        changeAppList: jest.fn(),
        setPageState: jest.fn(),
        openApp: jest.fn()
    };

    test('renders AppHome component', () => {
        render(<AppHome {...mockProps} />);
        expect(screen.getByText(/Add new/i)).toBeInTheDocument();
    });
});