import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Options, AccountOptions } from './Options';
import logo from '../../images/icon.png';
import { DrawerContext } from '../../App';


export default function ListDesign() {
    const { toggleDrawer } = useContext(DrawerContext);

    return <Box
        sx={{ width: "220px" }}
        role="presentation"
    >
        <List
            subheader={
                <ListSubheader component="div" sx={{
                    fontSize: 20, color: `
        #8676ff`, fontWeight: 'bold', margin: "7px 0 30px 0px"
                }}>
                    <img src={logo} alt="" style={{
                        height: "27px",
                        width: "27px",
                        verticalAlign: "middle",
                        marginRight: "10px"
                    }} /><span>Analyze</span>
                    <IconButton
                        size="large"
                        aria-label=""
                        onClick={() => toggleDrawer(false)}
                        sx={{ display: { xs: 'inline-block', md: 'none' } }}
                    >
                        <ChevronLeftIcon fontSize='large' />
                    </IconButton>

                </ListSubheader>
            }>
            {Options.map(({ label, icon }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px", color: "#a7a7c2" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} sx={{ color: "#a7a7c2" }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List
            subheader={
                <ListSubheader component="div" sx={{ fontSize: 20, color: "#bcbdce" }}>
                    Accounts
                </ListSubheader>
            }>
            {AccountOptions.map(({ label, icon }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px", color: "#a7a7c2" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} sx={{ color: "#a7a7c2" }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
}