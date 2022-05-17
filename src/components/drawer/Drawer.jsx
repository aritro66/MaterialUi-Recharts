import React, { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import ListDesign from './List';
import { DrawerContext } from '../../App';

export default function DrawerMenu({ variant }) {
  const { show } = useContext(DrawerContext);

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
    </Drawer>
  );
}
