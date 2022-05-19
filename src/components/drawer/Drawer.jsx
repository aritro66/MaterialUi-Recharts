import React, { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import ListDesign from './List';
import { DrawerContext } from '../../App';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Avatar, Box, Divider, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';


export default function DrawerMenu({ variant }) {
  const { show } = useContext(DrawerContext);
  const theme = useTheme();

  return (
    <Drawer
      variant={variant}
      anchor={'left'}
      open={(variant === "permanent") ? true : show}
      sx={{
        minWidth: "220px"
      }}
    >
      <ListDesign />
      <Box sx={{ height: "60px", width: "100%" }}>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Remy Sharp" sx={{ marginLeft: '20px', width: '38px', height: '38px' }}></Avatar>
          <Box sx={{ flexGrow: 1, marginLeft: '15px', padding: "10px 0" }}>
            <Typography component="div" variant="div"
              sx={{ fontSize: '15px', fontWeight: 'bold', color: theme.color1, fontFamily: 'sans-serif', }} >
              Albert Tristian
            </Typography>
            <Typography component="div" variant="body2" sx={{ fontFamily: 'sans-serif', fontSize: '13px', color: theme.color14, }} >
              Sr. Manager
            </Typography>
          </Box>
        </Box>
        <IconButton sx={{ position: 'absolute', right: '5px', bottom: '6px', minWidth: '50px', lineHeight: '50px' }}>
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
}
