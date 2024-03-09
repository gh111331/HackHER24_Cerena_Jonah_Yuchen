import NavbarLayout from '@/components/NavbarLayout'; 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';
// Gets applied to every page in the project
function MyApp({ Component, pageProps }) {

    // Check if the current page wants to use the layout; currently unused
    // const useLayout = Component.useLayout !== false;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarLayout>
                <Component {...pageProps} />
            </NavbarLayout>
        </ThemeProvider>
    );
}

export default MyApp;
