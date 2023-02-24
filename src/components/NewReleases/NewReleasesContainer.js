import React from 'react'
import NewReleasesCard from './NewReleasesCard';
import { useState, useEffect } from 'react';

function NewReleasesContainer() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f5df89040msh182d81d7105763ep1cdd70jsna06891c979eb',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  //define state
  const [newReleases, setNewReleases] = useState([])

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setNewReleases(result.slice(0,20))) // set state when the data received
      .catch(err => err) // return the error
    }, [])
    
  return (
    <div className="container">
      {newReleases.map((game) => {
        return (
          <NewReleasesCard
          title={game.title}
          thumbnail={game.thumbnail}
          category={game.genre}
          platform={game.platform}
          id={game.id}
          />
        )
      })}
    </div>
  )
}

export default NewReleasesContainer