import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mocking external dependencies
jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByTestId('design-architecture-component')).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<DesignArchitectureComponent />);

    const loader = await screen.findByRole('status');
    expect(loader).toBeInTheDocument();
  });

  test('renders error message if fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'error', errorMessage: 'Failed to load' });
    render(<DesignArchitectureComponent />);

    const errorMessage = await screen.findByText(/failed to load/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders data when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const successMessage = await screen.findByText(/sample data/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('handles user interactions such as clicking a button', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByRole('button'));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('ensures component is accessible by checking for proper ARIA roles and labels', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const button = screen.getByRole('button');
    expect(button).toHaveAccessibleName();
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });

  test('handles edge cases such as empty data or null values', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: null } });
    render(<DesignArchitectureComponent />);

    const errorMessage = await screen.findByText(/data is missing/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('validates form inputs and displays error messages for invalid entries', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button'));

    const errorMessage = screen.queryByText(/please enter a valid input/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('triggers re-fetch on button click', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByRole('button'));
    expect(useExternalData).toHaveBeenCalledTimes(2);
  });

  test('displays no data message when there is no data to display', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: {} });
    render(<DesignArchitectureComponent />);

    const noDataMessage = screen.getByText(/no data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('handles keyboard navigation and focus', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 13 });

    expect(button).toHaveFocus();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mocking external dependencies
jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByTestId('design-architecture-component')).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<DesignArchitectureComponent />);

    const loader = await screen.findByRole('status');
    expect(loader).toBeInTheDocument();
  });

  test('renders error message if fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'error', errorMessage: 'Failed to load' });
    render(<DesignArchitectureComponent />);

    const errorMessage = await screen.findByText(/failed to load/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders data when fetched successfully', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const successMessage = await screen.findByText(/sample data/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('handles user interactions such as clicking a button', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByRole('button'));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('ensures component is accessible by checking for proper ARIA roles and labels', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const button = screen.getByRole('button');
    expect(button).toHaveAccessibleName();
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });

  test('handles edge cases such as empty data or null values', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: null } });
    render(<DesignArchitectureComponent />);

    const errorMessage = await screen.findByText(/data is missing/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('validates form inputs and displays error messages for invalid entries', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button'));

    const errorMessage = screen.queryByText(/please enter a valid input/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('triggers re-fetch on button click', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    fireEvent.click(screen.getByRole('button'));
    expect(useExternalData).toHaveBeenCalledTimes(2);
  });

  test('displays no data message when there is no data to display', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: {} });
    render(<DesignArchitectureComponent />);

    const noDataMessage = screen.getByText(/no data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('handles keyboard navigation and focus', () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'success', data: { name: 'Sample Data' } });
    render(<DesignArchitectureComponent />);

    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 13 });

    expect(button).toHaveFocus();
  });
});