import React from 'react'
import { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';

function WindowsGamesContainer(props) {

  const {

  } = props

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const [browserGames, setBrowserGames] = useState([])

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setBrowserGames(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])

  return (
    <div>
      <div className="container">
      {browserGames.map((game) => {
        return (
          <GameCard
          title={game.title}
          thumbnail={game.thumbnail}
          category={game.genre}
          platform={game.platform}
          id={game.id}
          />
        )
      })}
    </div>
    </div>
  )
}

export default WindowsGamesContainer