import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {Options,AccountOptions} from './Options';

export default function DrawerMenu() {
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
      subheader={
        <ListSubheader component="div" sx={{fontSize:20,color:`
        #8676ff`, fontWeight:'bold'}}>
          Analyze
        </ListSubheader>
      }>
        {Options.map(({label,icon}, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      <Divider />
      <List 
      subheader={
        <ListSubheader component="div" sx={{fontSize:20}}>
          Accounts
        </ListSubheader>
      }>
        {AccountOptions.map(({label,icon}, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
          <Drawer
          variant='permanent'
            anchor={'left'}
            open={true}
            sx={{
              width:"240px"
            }}
            // onClose={toggleDrawer(anchor, false)}
          >
            {list('left')}
          </Drawer>
    </div>
  );
}
