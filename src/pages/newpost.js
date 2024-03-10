import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function NewPost() {
    const [location, setLoc] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const router = useRouter();

    const handleNewPost = (e) => {
        router.push('/'); //Redirect to home page or dashboard after posted
    };
    return (
        <>
            <Typography variant="h4" gutterBottom>Post a position here</Typography>
            <Box component="form" onSubmit={handleNewPost} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="location"
                    label="Volunteer Location"
                    name="location"
                    autoComplete="location"
                    autoFocus
                    value={location}
                    onChange={(e) => setLoc(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Position Description"
                    type="description"
                    id="description"
                    autoComplete="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="contact"
                    label="Your Contact"
                    type="contact"
                    id="contact"
                    autoComplete="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Post this position
                </Button>
            </Box>
        </>
    );
}