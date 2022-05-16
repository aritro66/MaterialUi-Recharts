import React, { createContext, useState } from 'react';
import { Box } from '@mui/system';
import './App.css';
import DrawerMenu from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';

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
        <Navbar sx={{ width: 'calc(100% - 210px)' }} />
      </Box>
      <Box
        sx={{ display: { xs: 'flex', md: 'none' } }}>
        <DrawerMenu variant="temporary" />
        <Navbar sx={{ width: '100%' }} />
      </Box>

    </DrawerContext.Provider>
  );
}

export default App;
