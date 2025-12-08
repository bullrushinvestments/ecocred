import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    // Mock API to delay response
    (fetchData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(resolve, 100))
    );

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/load data/i));

    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/load data/i));

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent(/failed to fetch/i)
    );
  });

  test('handles edge cases for input validation', () => {
    const { getByLabelText } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByLabelText(/input label/i), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByText(/submit/i));

    expect(
      screen.getByRole('alert').textContent
    ).toMatchInlineSnapshot(`"Input is required."`);
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /load data/i);
    fireEvent.click(button);
    expect(fetchData).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other external dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    // Mock API to delay response
    (fetchData as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => setTimeout(resolve, 100))
    );

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/load data/i));

    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/load data/i));

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent(/failed to fetch/i)
    );
  });

  test('handles edge cases for input validation', () => {
    const { getByLabelText } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByLabelText(/input label/i), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByText(/submit/i));

    expect(
      screen.getByRole('alert').textContent
    ).toMatchInlineSnapshot(`"Input is required."`);
  });

  test('ensures accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /load data/i);
    fireEvent.click(button);
    expect(fetchData).toHaveBeenCalled();
  });
});