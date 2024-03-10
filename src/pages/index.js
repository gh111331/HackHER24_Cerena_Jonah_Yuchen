import { Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Typography variant="h4" gutterBottom>
				Welcome 
			</Typography>
			<Typography variant="body1" gutterBottom>
				If you want to be a volunteer:
			</Typography>
			<Link href="/posts" passHref>
				<Button variant="contained" color="primary">
					(View available post)
				</Button>
			</Link>
			<Typography variant="body1" gutterBottom>
				If you are looking for a volunteer:
			</Typography>
			<Link href="/newpost" passHref>
				<Button variant="contained" color="primary">
					(post a position)
				</Button>
			</Link>
		</>
	);
}