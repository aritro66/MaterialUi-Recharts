import React from 'react';
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { useTheme } from '@mui/material';

export default function BasicInfo() {
    const theme = useTheme();
    return (<>
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' }, marginBottom: "20px" }}>
            <Box sx={{ marginBottom: "15px" }}>
                <Typography variant='h5' component="div" sx={{ fontWeight: "bold", color: theme.color1 }}>
                    Hi, Albert Tristian
                </Typography>
                <Typography variant='h6' component="div" sx={{ fontSize: "13px", color: theme.color2 }}>
                    welcome back to analyze
                </Typography>
            </Box>
            <Box sx={{ display: "flex", height: '35px' }}>
                <Button variant='outlined' endIcon={<ShareOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", color: theme.color3, borderColor: theme.color3, marginRight: "10px" }}>Share</Button>
                <Button variant='contained' endIcon={<FileDownloadOutlinedIcon />} sx={{ fontSize: "12px", fontWeight: "bold", padding: "5px 20px", textTransform: "capitalize", backgroundColor: theme.color3 }}>Export</Button>
            </Box>

        </Box>
        <Box sx={{ marginBottom: "30px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: `1px solid ${theme.color4}`, borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
                                    TOTAL INCOME
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: theme.color1, fontWeight: 'bold' }}>
                                    $589,209.78
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color5, fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: theme.color8 }}>20%</Typography> increase comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: theme.color8, backgroundColor: theme.color7, borderRadius: "5px", padding: "8px" }}>
                                    <CallMadeIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px", color: theme.color3, fontSize: "12px", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", '&:hover': { backgroundColor: theme.color3, color: theme.color9 } }}>
                            <Typography variant='h6' component='h6'>
                                See Detail
                            </Typography>
                            <IconButton>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: `1px solid ${theme.color4}`, borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
                                    TOTAL EXPENSE
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: theme.color1, fontWeight: 'bold' }}>
                                    $120,458.90
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color5, fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: theme.color6 }}>15%</Typography> decrease comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: theme.color6, backgroundColor: theme.color7, borderRadius: "5px", padding: "8px" }}>
                                    <SouthEastIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px", color: theme.color3, fontSize: "12px", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", '&:hover': { backgroundColor: theme.color3, color: theme.color9 } }}>
                            <Typography variant='h6' component='h6'>
                                See Detail
                            </Typography>
                            <IconButton>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ border: `1px solid ${theme.color4}`, borderRadius: "5px" }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", padding: "10px 15px" }}>
                            <Box>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
                                    TOTAL VISITORS
                                </Typography>
                                <Typography variant="h5" component="h5" sx={{ color: theme.color1, fontWeight: 'bold' }}>
                                    502,903
                                </Typography>
                                <Typography variant='h6' component='h6' sx={{ color: theme.color5, fontSize: "14px" }}>
                                    <Typography variant="body1" component="span" sx={{ color: theme.color8 }}>80%</Typography> increase comapred to last week
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ color: theme.color8, backgroundColor: theme.color7, borderRadius: "5px", padding: "8px" }}>
                                    <CallMadeIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: "5px 15px", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", color: theme.color3, fontSize: "12px", '&:hover': { backgroundColor: theme.color3, color: theme.color9 } }}>
                            <Typography variant='h6' component='h6'>
                                See Detail
                            </Typography>
                            <IconButton sx={{ color: theme.color9 }}>
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    </>)
}
