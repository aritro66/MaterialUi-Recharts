import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #ccc",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#7d7d98',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#7d7d98',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StyleButton1 = styled(Button)(({ theme }) => ({
  color: '#383874',
  fontWeight:'bold',
  backgroundColor: `#e8ecf2`,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: `#ced7e3`,
    boxShadow: 'none',
  },
}));

export const StyleButton2 = styled(Button)(({ theme }) => ({
  color: '#c5c6d4',
  fontWeight:'bold',
  backgroundColor: `#f8f9fb`,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: `#f4f2fb`,
    boxShadow: 'none',
  },
}));