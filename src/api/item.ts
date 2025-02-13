import {UserLoginDTO} from "../dto/user.ts";
import apiClient from "./apiClient.ts";

export async function getAllCardItems(userCred: UserLoginDTO) {
    const response = await apiClient.post('/api/auth/login', userCred);
    return response.data;
}