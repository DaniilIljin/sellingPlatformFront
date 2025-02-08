import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useAuth} from "../contect/AuthContext.tsx";

// function App() {
//     const {accessToken, refreshToken} = useAuth()
//     const navigator = useNavigate()
//   return (
//     <>
//         Access token: { accessToken !== null ? accessToken : "Fuck, where it is?"}
//         <br/>
//         Refresh token: {refreshToken !== null ? refreshToken : "Fuck, where it is?"}
//         <br/>
//         <Button onClick={() => navigator('/register')}>Register</Button>
//         <Button onClick={() => navigator('/login')}>Login</Button>
//     </>
//   )
// }

// export default App

import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Grid, Card, CardContent, CardMedia, IconButton, CssBaseline, Box } from "@mui/material";
import { Menu, FilterList } from "@mui/icons-material";

const items = [
    { id: 1, title: "Item 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Item 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Item 3", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Item 4", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Item 5", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Item 6", image: "https://via.placeholder.com/150" },
    { id: 7, title: "Item 7", image: "https://via.placeholder.com/150" },
    { id: 8, title: "Item 8", image: "https://via.placeholder.com/150" },
    { id: 9, title: "Item 9", image: "https://via.placeholder.com/150" },
];

export default function WebSellingLayout() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* Top Navigation Bar */}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Thrift Sales
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar for Sorting & Filtering */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", mt: 8 },
                }}
            >
                <Toolbar />
                <List>
                    <ListItem>
                        <ListItemText primary="Sort & Filter" />
                        <FilterList />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Price: Low to High" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Price: High to Low" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Newest" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content - Grid of Items */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: 30 }}>
                <Grid container spacing={3}>
                    {items.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
