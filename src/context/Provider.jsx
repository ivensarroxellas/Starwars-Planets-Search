import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [planets, setPlanets] = useState([]);

  // Auxílio do Manoel Lima
  async function fetchApi() {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const result = await response.json();
    const filteredResult = result.results.filter((planet) => delete planet.residents);
    setPlanets(filteredResult);
    setLoading(false);
  }

  const context = {
    loading,
    planets,
    fetchApi,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}.isRequired;

export default Provider;
