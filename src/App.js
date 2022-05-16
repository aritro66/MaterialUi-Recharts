import React, { createContext, useState } from 'react';
import { Box } from '@mui/system';
import './App.css';
import DrawerMenu from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import { Stack } from '@mui/material';

export const DrawerContext = createContext();

function App() {

  const [show, setShow] = useState(false);

  const toggleDrawer = (option) => {
    setShow((prev) => option);
  }

  return (
    <DrawerContext.Provider value={{show,toggleDrawer}}>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <DrawerMenu variant="permanent" />
        <Stack spacing={2} sx={{ width: 'calc(100% - 210px)' }}>
          <Navbar  />
          <Body />
        </Stack>
      </Box>
      <Box
        sx={{ display: { xs: 'flex', md: 'none' } }}>
        <DrawerMenu variant="temporary" />
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Navbar  />
          <Body />
        </Stack>
      </Box>

    </DrawerContext.Provider>
  );
}

export default App;
