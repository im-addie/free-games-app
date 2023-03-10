import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StrategyContainer from '../Category/StrategyContainer';
import ShooterContainer from '../Category/ShooterContainer';
import RPGContainer from '../Category/RPGContainer';
import SciFiContainer from '../Category/SciFiContainer';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
    disableScrollLock={true}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function CategoryButton() {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='category'>
      <Button 
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ my: 2, color: 'white'}}
      >
        Category
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to='/category/shooter' element={<ShooterContainer/>} className='link-button'>
          <MenuItem onClick={handleClose} disableRipple>
            Shooter
          </MenuItem>
        </Link>

        <Link to='/category/sci-fi' element={<SciFiContainer/>} className='link-button'>
          <MenuItem onClick={handleClose} disableRipple>
            Sci-Fi
          </MenuItem>
        </Link>

        <Link to='/category/strategy' element={<StrategyContainer/>} className='link-button'>
          <MenuItem onClick={handleClose} disableRipple>
            Strategy
          </MenuItem>
        </Link>

        <Link to='/category/rpg' element={<RPGContainer/>} className='link-button'>
          <MenuItem onClick={handleClose} disableRipple>
            Role-playing
          </MenuItem>
        </Link>

      </StyledMenu>
    </div>
  )
}

export default CategoryButton