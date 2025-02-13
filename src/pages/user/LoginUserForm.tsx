import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { UserLoginDTO } from "../../dto/user.ts";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from "../../api/auth.ts";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../contect/AuthContext.tsx";

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[!@#$%^&*.;:]/, 'Password must contain at least one special character (!@#$%^&*.;:)'),
});

const LoginUserForm = () => {
    const navigate = useNavigate();
    const { setTokens } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginDTO>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "BIGDEN",
            password: "Password1.",
        }
    });

    const onSubmit = async (data: UserLoginDTO) => {
        console.log(data);
        try {
            const responseData = await loginUser(data);
            setTokens(responseData.accessToken, responseData.refreshToken);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mt: 4,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                }}
            >
                <Typography variant="h4" textAlign="center" gutterBottom>
                    User Login
                </Typography>
                <TextField
                    label="Name"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default LoginUserForm;
