import {UserLoginDTO, UserRegisterDTO} from "../dto/user.ts";
import apiClient from "./apiClient.ts";

export async function registerUser(userCred: UserRegisterDTO) {
    const response = await apiClient.post('/api/user/register', userCred);
    return response.data;
}

export async function loginUser(userCred: UserLoginDTO) {
    const response = await apiClient.post('/api/auth/login', userCred);
    return response.data;
}