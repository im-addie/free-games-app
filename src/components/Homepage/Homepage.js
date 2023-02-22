//imports
import { useState, useEffect } from "react"
import GameCard from "../GameCard/GameCard"
import './Homepage.css'

//define helper functions and variables here

function Homepage(props) {

  const {
  //destructure props
  } = props
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f5df89040msh182d81d7105763ep1cdd70jsna06891c979eb',
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