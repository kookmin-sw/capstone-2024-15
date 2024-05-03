import axios, {AxiosResponse} from 'axios';
import {ILogin} from "@/types/User";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

// api 호출 test 코드
export const login = async ({ email, password, accessToken } : ILogin ): Promise<AxiosResponse> => {
    const data = {
        email,
        password,
        accessToken,
    }
    const response: AxiosResponse = await axios.post(`${API_ENDPOINT}/login`, {
        data
    });
    return response;
};