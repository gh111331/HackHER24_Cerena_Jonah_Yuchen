import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function NavbarLayout({ children }) {
    return (
        <Box sx={{ flexGrow: 1, margin: 0 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Whatever we name it
                    </Typography>
                    <Link href="/signup" passHref>
                        <Button variant="contained" color="inherit">Register</Button>
                    </Link>
                    <Link href="/login" passHref>
                        <Button variant="outlined" color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        </Box>
    );
}
