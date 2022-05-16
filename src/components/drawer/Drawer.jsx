import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {list} from './List';

export default function DrawerMenu() {
  
  return (
    // <div>
          <Drawer
          variant='permanent'
            anchor={'left'}
            open={true}
            sx={{
              minWidth:"220px"
            }}
            
          >
            {list('left')}
          </Drawer>
    // </div>
  );
}
