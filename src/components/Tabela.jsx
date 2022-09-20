import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Tabela() {
  const { fetchApi, planets, loading } = useContext(MyContext);
  useEffect(() => {
    const fetch = () => fetchApi();
    fetch();
  }, []);
  console.log(Object.values(planets));
  if (loading) return <h1>Carregando...</h1>;
  if (planets) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          <tbody>
            {
              planets.map(
                (planet) => (
                  <tr key={ planet.name }>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                    <td>{planet.films.map((film) => (<p key={ film }>{film}</p>))}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>
                  </tr>),
              )
            }
          </tbody>
        </thead>
      </table>
    );
  }
}

Tabela.propTypes = {
  planet: PropTypes.any,
}.isRequired;

export default Tabela;
