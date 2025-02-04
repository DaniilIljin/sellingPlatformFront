import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import {UserRegisterDTO} from "../dto/user.ts";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterDTO>();

    const onSubmit = (data: UserRegisterDTO) => {
        console.log('Submitted Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <br/>
            <TextField
                margin="normal"
                label="Email"
                {...register('email', { required: 'Email is required' })}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <br/>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
