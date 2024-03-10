import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Box } from '@mui/material';

import { auth } from '@/../firebaseConfig'; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           // Update the user profile with the username
           return updateProfile(user, {
               displayName: username // Set the username as the display name
           });
        })
       .then(() => {
           console.log('User profile updated.');
           router.push('/'); // Redirect to home page or dashboard after signup and profile update
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
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    style={{ position: 'absolute', top: '225px', left: '300px', width: '300px' }}
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    style={{ position: 'absolute', top: '295px', left: '300px', width: '300px' }}
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
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ position: 'absolute', top: '370px', left: '320px', width: '250px' }}
                >
                    
                    Sign Up
                    
                </Button>
            </Box>
        </>
    );
}
