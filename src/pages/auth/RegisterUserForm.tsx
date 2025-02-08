import {TextField, Button, Container, Typography, Box} from '@mui/material';
import { useForm } from 'react-hook-form';
import {UserRegisterDTO} from "../../dto/user.ts";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import {registerUser} from "../../api/auth.ts";
import {useNavigate} from "react-router-dom";

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    address: z.string().min(1, 'Address is required'),
    additionalInfo: z.string().max(200, 'Additional info should not exceed 200 characters').optional(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[!@#$%^&*.;:]/, 'Password must contain at least one special character (!@#$%^&*.;:)'),
});

const RegisterUserForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm<UserRegisterDTO>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: 'a@B.ee',
            password: 'Password1.',
            name: "BIGDEN",
            address: "Akadeemia",
            additionalInfo: "I am human",
        }
    });

    const onSubmit = async (data: UserRegisterDTO) => {
        console.log(data);
        try {
            const responseData = await registerUser(data)
            console.log(responseData)
            navigate('/')
        } catch (error) {
            alert(error.message)
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
                    User Registration
                </Typography>
                <TextField
                    label="Name"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    fullWidth
                />
                <TextField
                    label="Email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                />
                <TextField
                    label="Address"
                    {...register('address')}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    fullWidth
                />
                <TextField
                    label="Additional Info"
                    {...register('additionalInfo')}
                    error={!!errors.additionalInfo}
                    helperText={errors.additionalInfo?.message}
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
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterUserForm;
