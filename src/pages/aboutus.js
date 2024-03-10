import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function AboutUs() {
    return (
        <>
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column', // Align children vertically
                    // justifyContent: 'center', // Center children vertically in container
                    alignItems: 'center', // Center children horizontally in container
                    height: '100vh', // Take full height of the viewport
                    mt: 1
                }}>
                <Typography variant="h4" gutterBottom style={{width: '300px'}}>
		        Our Mission
	            </Typography>

                <Typography variant="h5" gutterBottom style={{width: '600px'}} textAlign= 'centre'>
		        Our goal is to streamline the experience of looking for volunteers and looking to volunteer.
	            </Typography>
            </Box>
            
        </>
    );
}
