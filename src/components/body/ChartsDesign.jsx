import React from 'react'
import { Box, Grid, Typography, InputLabel, Select, MenuItem, FormControl, IconButton } from '@mui/material';
import logo from "../../images/product.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import { chartData1, chartData2 } from './DummyData';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ChartsDesign() {

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} lg={8}>
                    <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px", padding: "10px 15px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                                Sales Analytics
                            </Typography>
                            <FormControl sx={{ width: "200px", fontSize: "15px" }}>
                                <InputLabel id="demo-simple-select-label">Period</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="time"
                                >
                                    <MenuItem value={10} selected>Period: <Typography variant='body1' component='span' sx={{ color: "#383874", fontWeight: "bold" }}> This Week</Typography></MenuItem>
                                    <MenuItem value={20}>Period: <Typography variant='body1' component='span' sx={{ color: "#383874", fontWeight: "bold" }}> This Month</Typography></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={chartData1} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="pv" unit="K" tickFormatter={num => `$${num}`} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line type="monotone" dataKey="pv" stroke="#8676ff" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5} lg={4}>
                    <Box sx={{ border: "1px solid #e4e4e4", borderRadius: "5px", padding: "10px 15px", position:"relative" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                                Social Source
                            </Typography>
                            <IconButton sx={{ color: "#a7a7c2" }}>
                                <MoreHorizIcon />
                            </IconButton>

                        </Box>
                        <ResponsiveContainer width="100%" height={120}>
                            <PieChart>
                                {chartData2.map((entry, index) => (
                                    <Pie
                                        data={[entry]}
                                        cx="50%"
                                        cy={100}
                                        startAngle={entry.st}
                                        endAngle={entry.ed}
                                        innerRadius={entry.inr}
                                        outerRadius={entry.otr}
                                        paddingAngle={0}
                                        dataKey="value"
                                    > <Cell key={`cell-${index}`} fill={entry.color} />
                                    </Pie>

                                ))}
                            </PieChart>
                        </ResponsiveContainer>
                        <Box sx={{ position: "absolute",left:"50%",top:"140px",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center" }}>
                            <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "12px" }}>
                                TOTAL SALES
                            </Typography>
                            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "21px", fontWeight: 'bold' }}>
                                3,234
                            </Typography>
                            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "10px", fontWeight: 'bold' }}>
                                <img src={logo} style={{height:"10px",width:"10px"}}/> Products
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", marginTop: "40px" }}>
                            <Box sx={{ borderTop: "5px solid #21cc9e", padding: "10px 0" }} >
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    E-Commerce
                                </Typography>
                                <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "21px", fontWeight: 'bold' }}>
                                    1,618
                                </Typography>
                            </Box>
                            <Box sx={{ borderTop: "5px solid #8676ff", padding: "10px 0" }} >
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    Facebook
                                </Typography>
                                <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "21px", fontWeight: 'bold' }}>
                                    808
                                </Typography>
                            </Box>
                            <Box sx={{ borderTop: "5px solid #eff4f8", padding: "10px 0" }} >
                                <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                                    Instagram
                                </Typography>
                                <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "21px", fontWeight: 'bold' }}>
                                    808
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

function CustomTooltip({ active, payload }) {
    if (active) {
        return (
            <div style={{ padding: "8px", color: "#383874", backgroundColor: "white", border: "1px solid #e4e4e4" }}>
                {`$${payload[0].value * 1000}`}
            </div>
        );
    }
    return null;
}