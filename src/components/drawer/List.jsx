import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Options, AccountOptions } from './Options';
import logo from '../../images/icon.png';

export const list = (anchor) => (
    <Box
        sx={{ width: "220px" }}
        role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
        <List
            subheader={
                <ListSubheader component="div" sx={{
                    fontSize: 20, color: `
        #8676ff`, fontWeight: 'bold', margin: "7px 0 30px 0px"
                }}>
                    <img src={logo} alt="" style={{
                        height: "30px",
                        width: "30px",
                        verticalAlign: "middle",
                        marginRight: "15px"
                    }} /><span>Analyze</span>
                </ListSubheader>
            }>
            {Options.map(({ label, icon }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
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
                <ListSubheader component="div" sx={{ fontSize: 20 }}>
                    Accounts
                </ListSubheader>
            }>
            {AccountOptions.map(({ label, icon }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);