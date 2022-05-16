import { Box, Button, Typography } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React from 'react'

export default function BasicInfo() {
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between",flexDirection:{xs: 'column', md: 'row'} }}>
            <Box sx={{marginBottom:"15px"}}>
                <Typography variant='h5' component="div" sx={{ fontWeight: "bold", color: "#383874" }}>
                    Hi, Albert Tristian
                </Typography>
                <Typography variant='h6' component="div" sx={{ fontSize: "13px" }}>
                    welcome back to analyze
                </Typography>
            </Box>
            <Box sx={{ display: "flex", height: '35px' }}>
                <Button variant='outlined' endIcon={<ShareOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", color: "#8676ff", borderColor: "#8676ff", marginRight: "10px" }}>Share</Button>
                <Button variant='contained' endIcon={<FileDownloadOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", backgroundColor: "#8676ff" }}>Export</Button>
            </Box>

        </Box>
    )
}
