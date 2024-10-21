import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    // Mark visited button useState or event handlers 
    const [visitedCountries, setVisitedCountries] =useState([])

    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country')
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    // -------------------------------------------------------------
    // add flag button useState or event handler
    const [visitedFlag,setVisitedFlag] = useState([])

    const handleVisitedFlag = (flag) =>{
        const newHandleVisitedFlag = [...visitedFlag,flag];
        setVisitedFlag(newHandleVisitedFlag);
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove


    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display all flags */}
            <div className="flag-container">
                {
                    visitedFlag.map(flag => <img src={flag}></img>)//visitedFlag.map((,idx) => <img key={idx} src={flag}></img>) ----> not show in this warning....
                }
            </div>
            {/* display countries */}
           <div className="countries-container">
           {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}//mark visited button event handler function
                    handleVisitedFlag={handleVisitedFlag}//add flag button event handler function
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;