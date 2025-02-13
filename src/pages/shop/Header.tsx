import {AppBar, Toolbar, Typography, Button, Box, Switch} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth} from "../../contect/AuthContext.tsx";

const Header = () => {
    const {accessToken, clearTokens} = useAuth()

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",

    };

    const loggedIn = () => {
        return <>
            <Button component={Link} to="/" sx={linkStyle} onClick={() => clearTokens()}>
                logout
            </Button>
            <Button component={Link} to="/register" sx={linkStyle}>
                profile
            </Button>
        </>
    }

    const loggedOut = () => {
        return <>
            <Button component={Link} to="/login" sx={linkStyle}>
                login
            </Button>
            <Button component={Link} to="/register" sx={linkStyle}>
                register
            </Button>
        </>
    }


    return <>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{flexGrow: 1, display: "flex", alignItems: "center"}}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{textDecoration: "none", color: "inherit"}}
                    >
                        Home
                    </Typography>
                </Box>
                <Box>
                    {accessToken ? loggedIn() : loggedOut()}
                    <Switch color={"default"}/>
                </Box>
            </Toolbar>
        </AppBar>
    </>
};

export default Header;
