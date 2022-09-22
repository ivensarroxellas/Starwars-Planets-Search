import React from 'react';
import { waitFor, render, screen, act } from '@testing-library/react';
import App from '../App';
import  testData  from './mock.js';
import userEvent from '@testing-library/user-event';

//Auxílio do Pedro Ayres
describe('StarWars Project Tests', () => {
  beforeEach( async ()=> {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(testData),
    }));
    act(() => render(<App />))
  });

  jest.setTimeout(11000)
  test('Check filter', async () => {
    await waitFor(() => expect(screen.getByText('Tatooine')).toBeInTheDocument(), { timeout: 9000 });

    const colummn = screen.getByTestId("column-filter")
    const comparison = screen.getByTestId("comparison-filter")
    const valueInput = screen.getByTestId("value-filter")
    const buttonFilter = screen.getByTestId("button-filter")

    userEvent.type(colummn, 'orbital_period')
    userEvent.type(comparison, 'maior que')
    userEvent.type(valueInput, '10000')
    userEvent.click(buttonFilter)

    await waitFor(() => expect(screen.getByText('Tatooine')).toBeInTheDocument(), { timeout: 9000 });
    });
  });