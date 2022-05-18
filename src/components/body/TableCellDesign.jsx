import React from 'react';
import TableCell from '@mui/material/TableCell';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

export const TableCellStyle1 = ({ first, second }) => {
    const theme = useTheme();
    return (
        <TableCell>
            <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
                {first}
            </Typography>
            <Typography variant='h5' component='h4' sx={{ color: theme.color1, fontSize: "18px", fontWeight: 'bold' }}>
                {second}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle2 = ({ data }) => {
    const theme = useTheme();
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: theme.color1, fontSize: "18px", fontWeight: 'bold' }}>
                {data}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle3 = ({ data }) => {
    const theme = useTheme();
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: theme.color10, fontSize: "18px", fontWeight: 'bold' }}>
                {data}
            </Typography>
        </TableCell>
    )
}

export const TableCellStyle4 = ({ first, second }) => {
    const theme = useTheme();
    return (
        <TableCell>
            <Typography variant='h5' component='h4' sx={{ color: theme.color1, fontSize: "18px", fontWeight: 'bold' }}>
                {first}
            </Typography>
            <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
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
    const theme = useTheme();
    if (data === "Success") {
        return (
            <Build color={theme.color8} backgroundColor={theme.color11} data={data} />
        );
    }
    else if (data === "Shipping") {
        return (
            <Build color={theme.color12} backgroundColor={theme.color13} data={data} />
        );
    }

}

export const TableCellStyle6 = ({ first, second, img }) => {
    const theme = useTheme();
    return (
        <TableCell>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
                <img src={img} alt="" style={{ height: "40px", width: "40px", marginRight: "12px" }} />
                <Box>
                    <Typography variant='h6' component='h6' sx={{ color: theme.color2, fontSize: "15px" }}>
                        {first}
                    </Typography>
                    <Typography variant='h5' component='h4' sx={{ color: theme.color1, fontSize: "18px", fontWeight: 'bold' }}>
                        {second}
                    </Typography>
                </Box>
            </Box>


        </TableCell>
    )
}


