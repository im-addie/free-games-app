import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './GameCard.css'
import IndividualPage from '../IndividualPage/IndividualPage'
import { useParams } from 'react-router-dom'

function GameCard(props) {

  const {
    title,
    platform,
    category,
    thumbnail,
    id
  } = props

  return (
    <div>
      <Link to={`/${id}`}>
        <Card
        className='game-card'
        style={{backgroundColor: "#484848"}}
        >
          <CardMedia
              className='game-thumbnail'
              component="img"
              src={thumbnail}
            />
          <CardContent>

            {/* game title */}
            <Typography variant='h6' fontWeight={"bold"} color='white' className='card-text'>
              {title}
            </Typography>

            {/* game category */}
            <Typography variant='subtitle' color='white' className='card-text'>
              {category}
            </Typography>

            <br />

            {/* game platform */}
            <Typography variant='caption' color='white' className='platform'>
              {platform}
            </Typography>

          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

export default GameCard