import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GamesIcon from '@mui/icons-material/Games';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewReleasesContainer from '../NewReleases/NewReleasesContainer';
import Homepage from '../Homepage/Homepage'
import './Navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import WindowsGamesContainer from '../Platforms/WindowsGamesContainer';
import BrowserGamesContainer from '../Platforms/BrowserGamesContainer'
import CategoryButton from './CategoryButton';

// text for the buttons, would probably remove them

// styling for the dropdown buttons
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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* logo on big screens */}
          <GamesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          {/* name on big screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'BlinkMacSystemFont',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            free games finder
          </Typography>
          
          {/* logo on small screens */}
          <GamesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          {/* name on small screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'BlinkMacSystemFont',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            free games finder
          </Typography>
          
          {/* nav menu on big screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            
            {/* buttons text for big screens */}
            
            <Link to='/' element={<Homepage/>}>
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>

            <CategoryButton />

              <div className='platforms'>
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
                  Platform
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
                  <Link to='/platform/windows' element={<WindowsGamesContainer/>} className='link-button'>
                    <MenuItem onClick={handleClose} disableRipple>
                      Windows
                    </MenuItem>
                  </Link>

                  <Link to='/platform/browser' element={<BrowserGamesContainer/>} className='link-button'>
                    <MenuItem onClick={handleClose} disableRipple>
                      Browser
                    </MenuItem>
                  </Link>
                </StyledMenu>
              </div>
              
              <Link to='/new-releases' element={<NewReleasesContainer/>}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  New Releases
                </Button>
              </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;