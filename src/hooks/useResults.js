import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (()=>{
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchResult = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log("Error response data:", error.response.data);
      setErrorMessage(error.response.data.error.description);
    }
  };

  useEffect(() => {
    searchResult("Pasta");
  }, []);

  return [searchResult, results, errorMessage];
});
