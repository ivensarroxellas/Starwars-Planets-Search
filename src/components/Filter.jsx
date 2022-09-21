import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { handleInput, handleChange, search,
    handleFilter, filterByNumericValues, optionsInfo } = useContext(MyContext);

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
        defaultValue={ optionsInfo[0] }
        onChange={ (e) => handleChange(e) }
      >
        {optionsInfo.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
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
