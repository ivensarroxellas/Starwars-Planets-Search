import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredByName, setFiltered] = useState({});

  // Auxílio do Philip Lages
  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((data) => setPlanets(data.results
        .filter((planet) => delete planet.residents)));
    setLoading(false);
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setSearch(value);
    setFiltered({ filteredByName: { name: value } });
  };

  const filteredPlanet = search.length > 0
    ? planets.filter((planet) => (planet.name).toLowerCase().includes(search))
    : planets;

  const context = {
    loading,
    handleInput,
    search,
    filteredPlanet,
    filteredByName,
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
