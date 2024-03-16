import React, {useEffect} from "react";
import WorldMap from './WorldMap';
import validCountryCodes from './scripts/ValidCountryCodes';
function TravelTracker(props){
    //props contains data in a form of a promise (unless it fails to access API)
    var [visitedCountries, setVisitedCountries] = React.useState(null);
    var [isDataSet, setIsDataSet] = React.useState(false);
    var [countryCount, setCountryCount] = React.useState(0);
 
    useEffect(() => {
      if (props.data !== "" && !isDataSet) {
        props.data.then((countries) => {
          const tempCountries = countries.data.map(dbRow => dbRow.countryCode);
          setVisitedCountries(tempCountries);
          setIsDataSet(true); // Indicates that data has been set
        });
      } else if (props.data === "") {
        //no data was acquired from API --> ignore for now
        setIsDataSet(true);
      }
    }, [props.data, isDataSet]);
  
    useEffect(() => {
      // This runs when visitedCountries changes and is not null
      if (visitedCountries !== null) {
        //set number of countries
        setCountryCount(visitedCountries.length); 
        //loop through visited Countries and update svg by country code
        visitedCountries.forEach(element => {
          if (document.getElementById(element)) {
            document.getElementById(element).style.fill = '#00BFFF';
          }      
        });
      }
    }, [visitedCountries]); 

    const handleSubmit = event =>
    {    
      //check if the country code is valid
      if(!validCountryCodes.includes(document.getElementsByName("countryCode")[0].value.toUpperCase()))
      {
        event.preventDefault();
        alert('Invalid country code. Should be two character only!');
      }
    }

    const addRoute ='http://localhost:5000/add'
    return(
      <>
      <div className="form-country">
        <form action={addRoute} onSubmit={handleSubmit} method="post">
          <input type="text" name="countryCode" autoFocus required placeholder="Enter two letter country code:" />
          <button type="submit">Add</button>
        </form>
      </div>
      <WorldMap length= {countryCount} />
  </>
    )
}

export default TravelTracker;