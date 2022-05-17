import React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Search, SearchIconWrapper, StyledInputBase, StyleButton1, StyleButton2 } from './Option';
import MoreIcon from '@mui/icons-material/MoreVert';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DrawerContext } from '../../App';



export default function Navbar() {
  const {show,toggleDrawer}=useContext(DrawerContext); 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: '#7d7d98' }}
            onClick={()=>{toggleDrawer(!show)}}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <StyleButton1 variant="contained">EN</StyleButton1>
            <StyleButton2 variant='contained'>ID</StyleButton2>
          </ButtonGroup>
          <Typography variant="body1" component="span" sx={{ color: "#bdbece", marginLeft: "10px" }}>
            English
          </Typography>;

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{color:"#7d7d98"}}
            >
              <Badge variant="dot" color="error">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ color: "#7d7d98" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
