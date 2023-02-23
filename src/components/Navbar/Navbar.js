import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GamesIcon from '@mui/icons-material/Games';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewReleasesContainer from '../NewReleases/NewReleasesContainer';
import Homepage from '../Homepage/Homepage'

// text for the buttons, would probably remove them
const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {/* buttons text for big screens */}
            <Link to='/' element={<Homepage/>}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Category
              </Button>
              
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Platform
              </Button>
              
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