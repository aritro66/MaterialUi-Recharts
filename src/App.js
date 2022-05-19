import React, { createContext, useState } from 'react';
import { Box } from '@mui/system';
import './App.css';
import DrawerMenu from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  color1: "#383874",
  color2: "#a7a7c2",
  color3: "#8676ff",
  color4: "#e4e4e4",
  color5: "#bcbdcd",
  color6: "#ff708b",
  color7: "#f8f9fb",
  color8: "#29cea1",
  color9: "#fff",
  color10: "#21cc9e",
  color11: "#d3f5ec",
  color12: "#ffc962",
  color13: "#fff3da",
  color14: "#44b700",
  color15: "#bbbbbb",
  color16: "#b0b0b0",
  color17: "#F8F6FF"
});

export const DrawerContext = createContext();

function App() {

  const [show, setShow] = useState(false);

  const toggleDrawer = (option) => {
    setShow((prev) => option);
  }

  return (
    <ThemeProvider theme={theme}>
      <DrawerContext.Provider value={{ show, toggleDrawer }}>
        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}>
          <DrawerMenu variant="permanent" />
          <Stack spacing={2} sx={{ width: 'calc(100% - 210px)' }}>
            <Navbar />
            <Body />
          </Stack>
        </Box>
        <Box
          sx={{ display: { xs: 'flex', md: 'none' } }}>
          <DrawerMenu variant="temporary" />
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Navbar />
            <Body />
          </Stack>
        </Box>

      </DrawerContext.Provider>
    </ThemeProvider>

  );
}

export default App;
