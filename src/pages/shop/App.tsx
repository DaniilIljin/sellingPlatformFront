
import {Card, CardMedia, CardContent, Typography, Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useAuth} from "../../contect/AuthContext.tsx";

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
    const {accessToken} = useAuth();

    if (!accessToken) {
        return <Typography>
            First authorize yourself!
        </Typography>
    }

    return (
        <Grid container mt={1} spacing={2}>
            <Grid size={3}>
                <Box sx={{ flexGrow: 1, backgroundColor: 'gray' }}>
                    big box
                </Box>
            </Grid>
            <Grid size={9}>
                <Grid container  spacing={2} >
                    {items.map((item) => (
                        <Grid size={4}>
                            <Card>
                                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

    );
}
