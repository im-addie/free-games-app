import React from 'react'
import './IndividualPage.css'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Screenshots from './Screenshots'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
      <Grid container rowSpacing={2}>

        {/* grid of main info */}
        <Grid item xs={12}>
          
          {/* screenshots */}
          {screenshots?.map((image) => { // the question mark is to handle if the array is there
          return (
            <Screenshots 
            screenshot={image.image}
          />
          )})}

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

            <Typography variant='button' className='button-look' fontWeight='bold'>
              <Link to={singleGame.game_url} color='white'>
                play game
              </Link>
            </Typography>
            
          </div>
          
          <Typography fontSize={18} marginBottom={3} className='description'>
            {singleGame.description}
          </Typography>

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
            Release
          </Typography>

          <Typography marginBottom={3}>
            {singleGame?.release_date}
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

        {/* 
        add <Grid item xs={0.5}'> for space between main and sidebar
        add '<Grid item xs={2.5}'> for suggested titles sidebar 
        */}
        
      </Grid>
    </div>
  )
}

export default IndividualPage