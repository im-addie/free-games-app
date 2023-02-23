import React from 'react'
import { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard'

function ShooterContainer() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f5df89040msh182d81d7105763ep1cdd70jsna06891c979eb',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const [shooterGames, setShooterGames] = useState([])

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setShooterGames(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])
  
  return (
    <div className='container'>
      {shooterGames.map((game) => {
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

export default ShooterContainer