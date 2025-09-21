import React, { use, useState, } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({CountriesPromise}) => {
    const [visitedCountries, setVisitedCountrise] = useState([]);
    const [visitedFlags, setVisitedFags] = useState([])

    // handle visited country
    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountrise(newVisitedCountries) 
    }
   // visited fags
   const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFags(newVisitedFlags);
       
   }
    const countriesData = use (CountriesPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h2>All Countries : {countries.length}</h2>
            <h4>Total Visited Countries : {visitedCountries.length}</h4>
            <h3>Total Visited Flag: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
          <div className='visited-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }

          </div>
        <div className='countries'>
            
            {
                countries.map(country => <Country 
                    key = {country.ccn3.ccn3}
                    country = {country}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;