import CountryData from "../countryData/CountryData";

const CountryDetails = (props) => {
    // const {country,handleVisitedCountry,handleVisitedFlag}= props;
    return (
        <div>
            <h4>Country Details:</h4>
            <hr />
            {/* <CountryData
             country={country}
             handleVisitedCountry={handleVisitedCountry}
             handleVisitedFlag={handleVisitedFlag}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;