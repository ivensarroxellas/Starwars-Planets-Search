import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { handleInput, handleChange, search,
    handleFilter, filterByNumericValues } = useContext(MyContext);

  return (
    <>
      <input
        name="search"
        type="text"
        placeholder="Filtre sua busca"
        data-testid="name-filter"
        onChange={ (e) => handleInput(e) }
        value={ search }
      />
      <select
        name="planetInfo"
        data-testid="column-filter"
        onChange={ (e) => handleChange(e) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparisonInfo"
        data-testid="comparison-filter"
        onChange={ (e) => handleChange(e) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="valueInput"
        type="number"
        placeholder="Digite o número"
        data-testid="value-filter"
        value={ filterByNumericValues.valueInput }
        onChange={ (e) => handleChange(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilter() }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filter;
