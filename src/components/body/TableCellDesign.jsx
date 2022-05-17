import React from 'react';
import TableCell from '@mui/material/TableCell';
import { Box, Typography } from '@mui/material';

export const TableCellStyle1 = ({ first, second }) => {
    return (
        <TableCell>
            <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                {first}
            </Typography>
            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                {second}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle2 = ({ data }) => {
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                {data}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle3 = ({ data }) => {
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: "#21cc9e", fontSize: "18px", fontWeight: 'bold' }}>
                {data}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle4 = ({ first, second }) => {
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                {first}
            </Typography>
            <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                {second}
            </Typography>
        </TableCell>
    )
}

const Build = ({ color, backgroundColor, data }) => {
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: color, fontSize: "18px", backgroundColor: backgroundColor, padding: "5px 10px", borderRadius: "5px" }}>
                {data}
            </Typography>
        </TableCell>
    );
}

export const TableCellStyle5 = ({ data }) => {
    if (data === "Success") {
        return (
            <Build color="#29cea1" backgroundColor="#d3f5ec" data={data} />
        );
    }
    else if (data === "Shipping") {
        return (
            <Build color="#ffc962" backgroundColor="#fff3da" data={data} />
        );
    }

}

export const TableCellStyle6 = ({ first, second, img }) => {
    return (
        <TableCell>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
                <img src={img} alt="" style={{ height: "40px", width: "40px", marginRight: "12px" }} />
                <Box>
                    <Typography variant='h6' component='h6' sx={{ color: "#a7a7c2", fontSize: "15px" }}>
                        {first}
                    </Typography>
                    <Typography variant='h5' component='h4' sx={{ color: "#383874", fontSize: "18px", fontWeight: 'bold' }}>
                        {second}
                    </Typography>
                </Box>
            </Box>


        </TableCell>
    )
}


