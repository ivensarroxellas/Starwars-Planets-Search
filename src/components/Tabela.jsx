import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Tabela() {
  const { fetchApi, planets, loading } = useContext(MyContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetch = () => fetchApi();
    fetch();
  }, []);

  const filteredPlanets = search.length > 0
    ? planets.filter((planet) => (planet.name).toLowerCase().includes(search))
    : [];

  if (loading) return <h1>Carregando...</h1>;
  if (planets) {
    return (
      <>
        <input
          name="search"
          type="text"
          placeholder="Filtre sua busca"
          data-testid="name-filter"
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
        />
        { search.length > 0 ? (
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
                  filteredPlanets.map(
                    (p) => (
                      <tr key={ p.name }>
                        <td>{p.name}</td>
                        <td>{p.rotation_period}</td>
                        <td>{p.orbital_period}</td>
                        <td>{p.diameter}</td>
                        <td>{p.climate}</td>
                        <td>{p.gravity}</td>
                        <td>{p.terrain}</td>
                        <td>{p.surface_water}</td>
                        <td>{p.population}</td>
                        <td>{p.films.map((film) => (<p key={ film }>{film}</p>))}</td>
                        <td>{p.created}</td>
                        <td>{p.edited}</td>
                        <td>{p.url}</td>
                      </tr>),
                  )
                }
              </tbody>
            </thead>
          </table>
        ) : (
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
                    (pa) => (
                      <tr key={ pa.name }>
                        <td>{pa.name}</td>
                        <td>{pa.rotation_period}</td>
                        <td>{pa.orbital_period}</td>
                        <td>{pa.diameter}</td>
                        <td>{pa.climate}</td>
                        <td>{pa.gravity}</td>
                        <td>{pa.terrain}</td>
                        <td>{pa.surface_water}</td>
                        <td>{pa.population}</td>
                        <td>{pa.films.map((film) => (<p key={ film }>{film}</p>))}</td>
                        <td>{pa.created}</td>
                        <td>{pa.edited}</td>
                        <td>{pa.url}</td>
                      </tr>),
                  )
                }
              </tbody>
            </thead>
          </table>)}
      </>
    );
  }
}

Tabela.propTypes = {
  planet: PropTypes.any,
}.isRequired;

export default Tabela;
