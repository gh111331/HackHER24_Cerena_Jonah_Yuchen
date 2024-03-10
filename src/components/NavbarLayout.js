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
                    <Link href="/" passHref> 
                        <Box sx={ {'&:hover button': { visibility: 'visible' } }}>
                            <Button variant="text" color="inherit" style={{ visibility: 'visible', textTransform: 'none' }} sx ={{
                                fontSize: '20px', color: 'black'
                            }}>
                                Put NAME here
                            </Button>
                        </Box>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    <Link href="/aboutus" passHref>
                        <Button variant="contained" color="inherit">About Us</Button>
                    </Link>            

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
