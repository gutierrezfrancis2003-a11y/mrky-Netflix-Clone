import React, { useEffect } from 'react';
import axios from './axios';

function Row({ tittle }) {
    const [movies, setMovies] = React.useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
  
}, []);
  return (
    <div>
      <h2>{tittle}</h2>

      {/* container -> posters */}
    </div>
  )
}

export default Row
