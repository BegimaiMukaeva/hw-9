import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';


const RandomPlanet = () => {
  const [state, setState] = useState({});
  const {id, name, population, rotationPeriod, diameter} = state;
  const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

  const swapi = new SwapiService();

  useEffect(() => {
    const updatePlanet = () => {
      const randomPlanetId = Math.floor(Math.random() * (20 - 2) + 2);
      swapi.getPlanet(randomPlanetId).then(data => {
        setState(data)
      })
    }
    updatePlanet()
    const meka = setInterval(() => {
      updatePlanet()
    }, 3000)

    return () => clearInterval(meka)
  }, [])

  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image" src={imgUrl} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RandomPlanet;
