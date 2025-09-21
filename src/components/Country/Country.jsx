import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false)
    
    const  handeleVisited = () => {
         setVisited(!visited)
         handleVisitedCountry(country)
       
      }
  //  console.log(country.flags.flags)
    return (
       
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
            {country.area.area > 300000? " Big Countray": " Small Country"}</p>
            <button onClick={handeleVisited}>
                {
                    visited ? 'Visited' : 'Not Visited'
                }</button>

                <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;