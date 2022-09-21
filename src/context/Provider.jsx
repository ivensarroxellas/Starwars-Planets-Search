import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchnumber, setSearchNumber] = useState([]);
  const [filteredByName, setFiltered] = useState({});
  const [optionsInfo, setOptionsInfo] = useState([
    'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filterByNumericValues, setFilteredNumber] = useState({
    planetInfo: 'population',
    comparisonInfo: 'maior que',
    valueInput: 0,
  });

  // Auxílio do Lucas Rodrigues
  useEffect(() => {
    setFiltered({
      planetInfo: optionsInfo[0],
      comparisonInfo: 'maior que',
      valueInput: 0,
    });
  }, [optionsInfo]);

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

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSearchNumber(value);
    setFilteredNumber({ ...filterByNumericValues, [name]: value });
  };

  const filteredPlanet = search.length > 0
    ? planets.filter((planet) => (planet.name).toLowerCase().includes(search))
    : planets;

  function handleFilter() {
    const { planetInfo, comparisonInfo, valueInput } = filterByNumericValues;

    if (comparisonInfo === 'maior que') {
      console.log('alo');
      console.log(planets);
      console.log(valueInput);
      setPlanets(planets
        .filter((planet) => Number(planet[planetInfo]) > Number(valueInput)));
    }
    if (comparisonInfo === 'menor que') {
      console.log('alo2');
      setPlanets(planets
        .filter((planet) => Number(planet[planetInfo]) < Number(valueInput)));
    }
    if (comparisonInfo === 'igual a') {
      console.log('alo3');
      setPlanets(planets
        .filter((planet) => Number(planet[planetInfo]) === Number(valueInput)));
    }
    const newColumArr = optionsInfo.filter((option) => option !== planetInfo);

    setOptionsInfo(newColumArr);
  }

  const context = {
    loading,
    handleInput,
    handleChange,
    handleFilter,
    search,
    searchnumber,
    filteredPlanet,
    filteredByName,
    filterByNumericValues,
    optionsInfo,
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
