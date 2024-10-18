import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Home component successfully', () => {
    render(<App />);
    const homeElement = screen.getByRole('heading', { name: /Home/i }); // Change this to match your Home component's header or text
    expect(homeElement).toBeInTheDocument();
  });

  test('renders SnackbarProvider', () => {
    render(<App />);
    const snackbarProviderElement = screen.getByText(/snackbar/i); // Change to match the Snackbar message text
    expect(snackbarProviderElement).toBeInTheDocument();
  });
});
