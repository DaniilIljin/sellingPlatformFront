import {Box, Container, CssBaseline} from "@mui/material";
import Header from "../shop/Header.tsx";
import {Outlet} from "react-router-dom";


const BasePage = () => {
    return <>
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Container>
                <Header />
                <Outlet/>
            </Container>
        </Box>
    </>
};

export default BasePage;