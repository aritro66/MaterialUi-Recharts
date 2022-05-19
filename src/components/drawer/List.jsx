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
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Options, AccountOptions } from './Options';
import logo from '../../images/icon.png';
import { DrawerContext } from '../../App';
import { useTheme } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { Avatar } from '@mui/material';

export default function ListDesign() {
    const { toggleDrawer } = useContext(DrawerContext);
    const theme = useTheme();

    return <Box
        sx={{ width: "220px", display: "relative", height: "100%",minHeight:"100vh" }}
        role="presentation"
    >
        <List
            subheader={
                <ListSubheader component="div" sx={{
                    fontSize: 20, color: theme.color3, fontWeight: 'bold', margin: "7px 0 30px 0px"
                }}><ImageListItem sx={{
                    height: "27px",
                    width: "27px",
                    verticalAlign: "middle",
                    marginRight: "10px"
                }}>
                        <img src={logo} alt="" />
                    </ImageListItem>
                    <span>Analyze</span>
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
            {Options.map(({ label, icon, no }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px", color: theme.color2 }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography>{label}</Typography>
                            {
                                no !== undefined ? <Chip label={no} size="small" sx={{ backgroundColor: theme.color6, color: theme.color9 }} /> : ""
                            }
                        </Box>} sx={{ color: theme.color2 }} />
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
            {AccountOptions.map(({ label, icon, no }, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px", color: theme.color2 }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography>{label}</Typography>
                            {
                                no !== undefined ? <Chip label={no} size="small" sx={{ backgroundColor: theme.color6, color: theme.color9 }} /> : ""
                            }
                        </Box>} sx={{ color: theme.color2 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Box sx={{ position: 'relative', bottom: '0', left: '0', width: "100%" }}>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" sx={{ marginLeft: '20px', width: '38px', height: '38px' }}></Avatar>
                <Box sx={{ flexGrow: 1, marginLeft: '15px', padding: "10px 0" }}>
                    <Typography component="div" variant="div"
                        sx={{ fontSize: '15px', fontWeight: 'bold', color: '#383874', fontFamily: 'sans-serif', }} >
                        Albert Tristian
                    </Typography>
                    <Typography component="div" variant="body2" sx={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#44b700', }} >
                        Sr. Manager
                    </Typography>
                </Box>
            </Box>
            <IconButton sx={{ position: 'absolute', right: '5px', bottom: '6px', minWidth: '50px', lineHeight: '50px' }}>
                <KeyboardArrowDownOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
}