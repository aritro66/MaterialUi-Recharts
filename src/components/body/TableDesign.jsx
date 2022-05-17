import React from 'react'
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tabledata } from './DummyData';
import { TableCellStyle1, TableCellStyle2, TableCellStyle3, TableCellStyle4, TableCellStyle5, TableCellStyle6 } from './TableCellDesign';

export default function TableDesign() {
    return (
        <Box>
            <Typography component="h6" variant="h6" sx={{ color: "#383874", fontWeight: "bold" }}>
                Order List
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ minWidth: "250px", color: "#a7a7c2" }}>PRODUCT</TableCell>
                            <TableCell sx={{ minWidth: "210px", color: "#a7a7c2" }}>ORDER DATE</TableCell>
                            <TableCell sx={{ minWidth: "100px", color: "#a7a7c2" }}>STATUS</TableCell>
                            <TableCell sx={{ minWidth: "230px", color: "#a7a7c2" }}>CUSTOMER</TableCell>
                            <TableCell sx={{ minWidth: "150px", color: "#a7a7c2" }}>PRICE PER UNIT</TableCell>
                            <TableCell sx={{ minWidth: "100px", color: "#a7a7c2" }}>QUANTITY</TableCell>
                            <TableCell sx={{ minWidth: "150px", color: "#a7a7c2" }}>TOTAL PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tabledata.map(row => {
                                return <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCellStyle6 first={row.product.id} second={row.product.name} img={row.img} />
                                    <TableCellStyle1 first={row.orderdate.time} second={row.orderdate.date} />
                                    <TableCellStyle5 data={row.status} />
                                    <TableCellStyle4 first={row.customer.name} second={row.customer.location} />
                                    <TableCellStyle2 data={row.priceperunit} />
                                    <TableCellStyle2 data={row.quantity} />
                                    <TableCellStyle3 data={row.totalprice} />
                                </TableRow>;
                            })
                        }


                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}
