import { Box } from '@mui/system';
import './App.css';
import DrawerMenu from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Box
        sx={{ display: 'flex' }}>
        <DrawerMenu />
        <Navbar sx={{width:'calc(100% - 240px)'}}/>
      </Box>


    </div>
  );
}

export default App;
