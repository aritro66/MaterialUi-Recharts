import { Box, Grid } from '@mui/material';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import { chartData1, chartData2 } from './DummyData';

export default function ChartsDesign() {



    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={8}>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData1} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="pv" unit="K" tickFormatter={num => `$${num}`} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="pv" stroke="#8676ff" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            {chartData2.map((entry, index) => (
                                <Pie
                                    data={[entry]}
                                    cx={120}
                                    cy={200}
                                    startAngle={entry.st}
                                    endAngle={entry.ed}
                                    innerRadius={entry.inr}
                                    outerRadius={entry.otr}
                                    // fill="#8884d8"
                                    paddingAngle={0}
                                    dataKey="value"
                                > <Cell key={`cell-${index}`} fill={entry.color} />
                                </Pie>

                            ))}
                        </PieChart>
                    </ResponsiveContainer>
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