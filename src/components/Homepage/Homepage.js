//imports
import { useState, useEffect } from "react"
import GameCard from "../GameCard/GameCard"
import './Homepage.css'

//define helper functions and variables here

function Homepage(props) {

  const {

  } = props

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  //define state
  const [allGames, setAllGames] = useState([])

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setAllGames(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])

  //component logic

  return (
    <div className="container">
      {allGames.map((game) => {
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
export default Homepage