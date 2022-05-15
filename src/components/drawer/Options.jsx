import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {BiCube,BiBox} from 'react-icons/bi';
import {FiPenTool,FiPackage,FiMessageCircle} from 'react-icons/fi'

export const Options = [
    {
        label: "Dashboard",
        icon: <GridViewOutlinedIcon />
    },
    {
        label: "Product",
        icon: <BiCube size={23} />
    },
    {
        label: "Favorites",
        icon: <FavoriteBorderOutlinedIcon />
    },
    {
        label: "Messages",
        icon: <FiMessageCircle size={23}/>
    },
    {
        label: "Order Lists",
        icon: <FiPackage size={23} />
    },
    {
        label: "Product Stock",
        icon: <BiBox size={23} />
    },
]

export const AccountOptions = [
    {
        label: "Settings",
        icon: <SettingsOutlinedIcon />
    },
    {
        label: "Themes",
        icon: <FiPenTool size={23}/>
    },
    {
        label: "Helps",
        icon: <HelpOutlineOutlinedIcon />
    },
];


