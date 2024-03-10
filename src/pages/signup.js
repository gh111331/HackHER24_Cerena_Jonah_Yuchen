import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Box } from '@mui/material';

import { auth } from '@/../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential.user);
            router.push('/'); // Redirect to home page or dashboard after signup
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    return (
        <>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                Signup
            </Typography>
            <Box
                component="form"
                onSubmit={handleSignup}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    style={{ position: 'absolute', top: '150px', left: '300px', width: '300px' }}

                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    style={{ position: 'absolute', top: '225px', left: '300px', width: '300px' }}
                    margin="normal"
                    required
                    
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ position: 'absolute', top: '300px', left: '320px', width: '250px' }}
                >
                    
                    Sign Up
                    
                </Button>
            </Box>
        </>
    );
}
