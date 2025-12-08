import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchContent: jest.fn().mockResolvedValue({
    id: '1',
    title: 'Sample Title',
    content: 'This is sample content.',
  }),
}));

describe('Core Functionality Component', () => {
  test('renders initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays fetched content after loading', async () => {
    const { getByText } = render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(getByText(/Sample Title/)).toBeInTheDocument());
    await waitFor(() => expect(getByText(/This is sample content./)).toBeInTheDocument());
  });

  test('handles API error and displays fallback message', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() =>
      expect(screen.getByText(/An error occurred while fetching the content./)).toBeInTheDocument()
    );
  });

  test('allows user to submit a form', async () => {
    const { getByRole, queryByPlaceholderText } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByRole('textbox'), { target: { value: 'New Content' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/ }));

    await waitFor(() => expect(queryByPlaceholderText(/Enter your content here/i)).not.toBeInTheDocument());
  });

  test('ensures form input is accessible and properly labeled', () => {
    render(<CoreFunctionalityComponent />);
    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('aria-label', 'Content Input');
    expect(inputElement).toBeVisible();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchContent: jest.fn().mockResolvedValue({
    id: '1',
    title: 'Sample Title',
    content: 'This is sample content.',
  }),
}));

describe('Core Functionality Component', () => {
  test('renders initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays fetched content after loading', async () => {
    const { getByText } = render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(getByText(/Sample Title/)).toBeInTheDocument());
    await waitFor(() => expect(getByText(/This is sample content./)).toBeInTheDocument());
  });

  test('handles API error and displays fallback message', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() =>
      expect(screen.getByText(/An error occurred while fetching the content./)).toBeInTheDocument()
    );
  });

  test('allows user to submit a form', async () => {
    const { getByRole, queryByPlaceholderText } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByRole('textbox'), { target: { value: 'New Content' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/ }));

    await waitFor(() => expect(queryByPlaceholderText(/Enter your content here/i)).not.toBeInTheDocument());
  });

  test('ensures form input is accessible and properly labeled', () => {
    render(<CoreFunctionalityComponent />);
    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('aria-label', 'Content Input');
    expect(inputElement).toBeVisible();
  });
});