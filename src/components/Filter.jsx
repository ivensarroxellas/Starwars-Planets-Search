import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { handleInput, search } = useContext(MyContext);

  return (
    <input
      name="search"
      type="text"
      placeholder="Filtre sua busca"
      data-testid="name-filter"
      onChange={ (e) => handleInput(e) }
      value={ search }
    />
  );
}

export default Filter;
