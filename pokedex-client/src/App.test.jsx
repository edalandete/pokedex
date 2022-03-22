import React from 'react';
import { render, screen } from './assets/test-utils';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
