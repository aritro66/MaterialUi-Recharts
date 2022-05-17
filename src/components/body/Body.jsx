import { Box } from '@mui/material'
import React from 'react';
import BasicInfo from './BasicInfo';
import ChartsDesign from './ChartsDesign';
import TableDesign from './TableDesign';

export default function Body() {
  return (
    <Box sx={{ padding: '20px' }}>
      <BasicInfo />
      <ChartsDesign />
      <TableDesign />
    </Box>
  )
}
