import React from 'react'
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'
import './GameCard.css'

function GameCard(props) {

  const {
    title,
    platform,
    category,
    thumbnail
  } = props

  return (
    <div>
      <Card
      className='game-card'
      style={{backgroundColor: "#484848"}}
      >
        <CardMedia
            className='product-image'
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
    </div>
  )
}

export default GameCard