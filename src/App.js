import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'

// Access API Key
const apiKey = process.env.REACT_APP_MY_API_KEY

function App() {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState('candy')

  useEffect(() => {
    let activeFetch = true
    axios
      // for search replace trending with search and vice versa
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=24`
      )
      // update gifState
      .then((responseData) => {
        if (activeFetch) {
          setGifs(responseData.data.data)
        }
      })
      .catch((err) => {
        console.log('Error fetching and parsing data:', err)
      })
    return () => {
      activeFetch = false
    }
  }, [query])

  const handleQueryChange = (searchText) => {
    setQuery(searchText)
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs} />
      </div>
    </div>
  )
}

export default App
