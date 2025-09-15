import React from 'react'
import Gif from './Gif'
import NoGifs from './NoGifs'

const GifList = ({ data }) => {
  let gifs

  if (data.length > 0) {
    gifs = data.map((gif) => (
      <Gif url={gif.images.fixed_height.url} alt={gif.title} key={gif.id} />
    ))
  } else {
    gifs = <NoGifs />
  }

  return <ul className="gif-list">{gifs}</ul>
}

export default GifList
