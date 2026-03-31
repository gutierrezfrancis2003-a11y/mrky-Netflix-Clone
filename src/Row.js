import React from 'react'

function Row({ tittle }) {
    const [movies, setMovies] = React.useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
  }, []);
  return (
    <div>
      <h2>{tittle}</h2>

      {/* container -> posters */}
    </div>
  )
}

export default Row
