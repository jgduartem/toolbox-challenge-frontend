
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavBar from '../src/components/NavBar';
import { setSearchQuery } from '../src/store/searchSlice';

const mockStore = configureStore([]);


describe('NavBar', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  it('should render the navbar', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    expect(screen.getByAltText('Toolbox Logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by file name')).toBeInTheDocument();
  });

  it('should dispatch setSearchQuery on input change', () => {
    jest.useFakeTimers();

    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search by file name');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    jest.advanceTimersByTime(500);

    expect(store.dispatch).toHaveBeenCalledWith(setSearchQuery('test'));

    jest.useRealTimers();
  });
});
