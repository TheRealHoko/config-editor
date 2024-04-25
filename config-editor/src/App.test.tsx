import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders app name', () => {
    render(<App />);
    const appName = screen.getByText(/config-editor/i);
    expect(appName).toBeInTheDocument();
  })
  
  it('renders the application name in the Navbar', () => {
    render(<App />);

    const appNameElement = screen.getByText(/config-editor/i);
    expect(appNameElement).toBeInTheDocument();
  });

  it('renders the textarea with the correct class name', () => {
    render(<App />);

    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toHaveClass('Config-output');
  });
});