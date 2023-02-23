import React from 'react'
import './IndividualPage.css'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { dateFormat } from '../utils';

function IndividualPage(props) {

  const {

  } = props

  const options = { // had a CORS error here and this fixes it
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f5df89040msh182d81d7105763ep1cdd70jsna06891c979eb',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  const {gameId} = useParams()

  const [singleGame, setSingleGame] = useState([])

  useEffect(() => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setSingleGame(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])

  const screenshots = singleGame.screenshots

  return (
    <div className='individual-page'>
      
      <Grid container rowSpacing={2} >

        {/* grid of screenshots */}
        <Grid item xs={9} className='screenshots-grid' style={{textAlign: "center"}}>
        <div className='screenshots'>
          {/* screenshots */}
          {screenshots?.map((image) => { // the question mark is to handle if the array is there
            return (
              <img src={image.image} />
            )})}
        </div>
        </Grid>

        {/* grid of main info */}
        <Grid item xs={9}>

          <Typography variant='h3' fontWeight='bold'>
            {singleGame.title}
          </Typography>

          <div style={{ display: "flex", alignItems: "baseline" }} className='game-props'>
            
            <Typography variant='button' className='button-look' fontWeight='bold'>
              {singleGame.platform}
            </Typography>

            <Typography variant='button' className='button-look' fontWeight='bold'>
              {singleGame.genre}
            </Typography>

          </div>
          
          <Typography fontSize={18} marginBottom={3} className='description'>
            {singleGame.description}
          </Typography>
          
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Link to={singleGame.game_url} color='white' className='play-game-button'>
                <Typography variant='button'  fontWeight='bold' fontSize={22}>
                  play game
                </Typography>
              </Link>
          </div>

          <Typography variant='h6' fontWeight='bold'>
            System requirements
          </Typography>
          
          <Typography marginBottom={3}>
            OS: {singleGame?.minimum_system_requirements?.os}
            <br />
            Processor: {singleGame?.minimum_system_requirements?.processor}
            <br />
            Memory: {singleGame?.minimum_system_requirements?.memory}
            <br />
            Graphics: {singleGame?.minimum_system_requirements?.graphics}
            <br />
            Storage: {singleGame?.minimum_system_requirements?.storage}
          </Typography>
              
          <Typography variant='h6' fontWeight='bold'>
            Release date
          </Typography>

          <Typography marginBottom={3}>
            {dateFormat(singleGame?.release_date)}
          </Typography>

          <Typography variant='h6' fontWeight='bold'>
            Publisher
          </Typography>

          <Typography marginBottom={3}>
            {singleGame?.publisher}
          </Typography>

          <Typography variant='h6' fontWeight='bold'>
            Developer
          </Typography>

          <Typography marginBottom={3}>
            {singleGame?.developer}
          </Typography>

        </Grid>

        <Grid item xs={0.5}>
          {/* space between sidebar and main */}
        </Grid>
        
        <Grid item xs={2.5}>
          {/* suggested titles sidebar goes here */}
        </Grid>
        
      </Grid>
    </div>
  )
}

export default IndividualPage