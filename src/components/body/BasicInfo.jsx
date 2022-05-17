import React from 'react';
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthEastIcon from '@mui/icons-material/SouthEast';

export default function BasicInfo() {
    return (<>
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, marginBottom: "20px" }}>
            <Box sx={{ marginBottom: "15px" }}>
                <Typography variant='h5' component="div" sx={{ fontWeight: "bold", color: "#383874" }}>
                    Hi, Albert Tristian
                </Typography>
                <Typography variant='h6' component="div" sx={{ fontSize: "13px", color: "#a7a7c2" }}>
                    welcome back to analyze
                </Typography>
            </Box>
            <Box sx={{ display: "flex", height: '35px' }}>
                <Button variant='outlined' endIcon={<ShareOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", color: "#8676ff", borderColor: "#8676ff", marginRight: "10px" }}>Share</Button>
                <Button variant='contained' endIcon={<FileDownloadOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", backgroundColor: "#8676ff" }}>Export</Button>
            </Box>

        </Box>
        <Box sx={{ marginBottom: "20px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    TOTAL INCOME
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: "#383874", fontWeight: 'bold' }}>
                                    $589,209.78
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: "#bcbdcd", fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: "#29cea1" }}>20%</Typography> increase comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: "#29cea1", backgroundColor: "#f8f9fb", borderRadius: "5px", padding: "8px" }}>
                                    <CallMadeIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px" }}>
                            <Typography variant='h6' component='h6' sx={{ color: "#8676ff", fontSize: "15px" }}>
                                See Detail
                            </Typography>
                            <IconButton>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    TOTAL EXPENSE
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: "#383874", fontWeight: 'bold' }}>
                                    $120,458.90
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: "#bcbdcd", fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: "#ff708b" }}>15%</Typography> increase comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: "#ff708b", backgroundColor: "#f8f9fb", borderRadius: "5px", padding: "8px" }}>
                                    <SouthEastIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px" }}>
                            <Typography variant='h6' component='h6' sx={{ color: "#8676ff", fontSize: "15px" }}>
                                See Detail
                            </Typography>
                            <IconButton>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    TOTAL VISITORS
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: "#383874", fontWeight: 'bold' }}>
                                    502,903
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: "#bcbdcd", fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: "#29cea1" }}>80%</Typography> increase comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: "#29cea1", backgroundColor: "#f8f9fb", borderRadius: "5px", padding: "8px" }}>
                                    <CallMadeIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px", backgroundColor: "#8676ff", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }}>
                            <Typography variant='h6' component='h6' sx={{ color: "#fff", fontSize: "15px" }}>
                                See Detail
                            </Typography>
                            <IconButton sx={{ color: "#fff" }}>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    </>)
}
