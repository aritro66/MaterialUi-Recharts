import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { BiCube, BiBox } from 'react-icons/bi';
import { FiPenTool, FiPackage, FiMessageCircle } from 'react-icons/fi'

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
        icon: <FiMessageCircle size={23} />,
        no: 4
    },
    {
        label: "Order Lists",
        icon: <FiPackage size={23} />,
        no: 2
    },
    {
        label: "Product Stock",
        icon: <BiBox size={23} />
    },
]

export const AccountOptions = [
    {
        label: "Settings",
        icon: <SettingsOutlinedIcon />,
        no: 2
    },
    {
        label: "Themes",
        icon: <FiPenTool size={23} />
    },
    {
        label: "Helps",
        icon: <HelpOutlineOutlinedIcon />
    },
];


