
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import useFiles from '../src/hooks/useFiles';
import CustomTable from '../src/components/CustomTable';



jest.mock('../src/hooks/useFiles');

const mockStore = configureStore([]);

describe('CustomTable', () => {
  let store;

  it('should render loading state initially', () => {
    useFiles.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    store = mockStore({
      search: { query: '' },
    });

    render(
      <Provider store={store}>
        <CustomTable />
      </Provider>
    );

    expect(screen.getAllByRole('row').length).toBe(6);
  });

  it('should render data when loading is false', () => {
    useFiles.mockReturnValue({
      data: [
        {
          file: 'test.csv',
          lines: [
            {
              text: 'test text',
              number: 123,
              hex: 'a1b2',
            },
          ],
        },
      ],
      loading: false,
      error: null,
    });

    store = mockStore({
      search: { query: '' },
    });

    render(
      <Provider store={store}>
        <CustomTable />
      </Provider>
    );

    expect(screen.getByText('test.csv')).toBeInTheDocument();
    expect(screen.getByText('test text')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('a1b2')).toBeInTheDocument();
  });

  it('should render error message on error', () => {
    useFiles.mockReturnValue({
      data: null,
      loading: false,
      error: 'Test error',
    });

    store = mockStore({
      search: { query: '' },
    });

    render(
      <Provider store={store}>
        <CustomTable />
      </Provider>
    );

    expect(screen.getByText('Error: Test error')).toBeInTheDocument();
  });
});
