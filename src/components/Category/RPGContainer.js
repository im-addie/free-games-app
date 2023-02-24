import React from 'react'
import { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard'

function RPGContainer(props) {
  
  const {

  } = props

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const [RPGGames, setRPGGames] = useState([])

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setRPGGames(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])
  
  return (
    <div className='container'>
      {RPGGames.map((game) => {
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
  )
}

export default RPGContainer