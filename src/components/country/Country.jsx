import { useState } from 'react';
import './country.css'
import CountryDetails from '../countryDetails/CountryDetails';

const Country = ({country, handleVisitedCountry,handleVisitedFlag}) => {
    console.log(country)
    const {name,flags,population,area,cca3} = country;

// visited or going conditional button useState or event handlers
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
// ----------------------------------------------------------


    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'black'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code: {cca3}</p>
            <button className='btn' onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button className='btn' onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
             {visited ?'I have visited this country.': 'I want to visit'}
             <hr />
             <CountryDetails
             country={country}
             handleVisitedCountry={handleVisitedCountry}
             handleVisitedFlag={handleVisitedFlag}
             ></CountryDetails>
        </div>
    );
};

export default Country;