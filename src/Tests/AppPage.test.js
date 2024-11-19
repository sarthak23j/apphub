import { render, screen } from '@testing-library/react';
import AppPage from '../Pages/AppPage';

describe('AppPage', () => {
    test('renders App Page', () => {
        render(<AppPage />);
        expect(screen.getByText(/App Page here/i)).toBeInTheDocument();
    });
});