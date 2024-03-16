import axios from "axios";
const getRoute ='http://localhost:5000/get-countries';

async function GetCountries() {
    try {
      return await axios.get(getRoute); 
    } catch (error) {
      console.error("Error fetching data from API:", error);
      /*return an empty string if there's an error with the API
        as it wont fail the display of the basic functionality */
      return "";
    }
  };

export default GetCountries;