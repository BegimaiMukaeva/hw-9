import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

const PersonDetails = () =>  {
    const [data, setData] = useState({})
    const swapi = new SwapiService()
    useEffect(() => {
        swapi.getPerson(1)
            .then(data => {
            setData(data)})
            .catch(error => error)
    }, [])

    const {id, name, gender, birthYear, eyeColor} = data
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imageUrl} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default PersonDetails;
