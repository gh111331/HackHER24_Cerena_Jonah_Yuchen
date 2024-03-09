import { Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Typography variant="h4" gutterBottom>
				Welcome 
			</Typography>
			<Typography variant="body1" gutterBottom>
				This is sample text. Very cool.
			</Typography>
			<Link href="/posts" passHref>
				<Button variant="contained" color="primary">
					(Does nothing)
				</Button>
			</Link>
		</>
	);
}