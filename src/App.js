import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'

// Access API Key
const apiKey = process.env.REACT_APP_MY_API_KEY

function App() {
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=24`)
      // update gifState
      .then((responseData) => setGifs(responseData.data.data))
      .catch((err) => console.log('Error fetching and parsing data:', err))
  }, [])

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  )
}

export default App
