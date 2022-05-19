import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Avatar, Box, Divider, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';

export default function UserInfo() {
  const theme = useTheme();

  return (
    <Box sx={{ height: "60px", width: "100%" }}>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="" src="https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg" sx={{ marginLeft: '20px', width: '38px', height: '38px' }}></Avatar>
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
  )
}
