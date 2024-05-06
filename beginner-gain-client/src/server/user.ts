import axios, {AxiosResponse} from 'axios';
import {IJoin, ILogin, ILoginResponse} from "@/types/User";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

// api 호출 test 코드
export const login = async ({ email, password } : ILogin ): Promise<ILoginResponse> => {
    console.log(API_ENDPOINT);
    const response: ILoginResponse = await axios.post(`${API_ENDPOINT}/user/login`, {
        email,
        password,
    });
    return response;
};

export const join = async ({ email, password, name } : IJoin ) => {
    const response : AxiosResponse = await axios.post(`${API_ENDPOINT}/user/register`, {
        email,
        password,
        name,
    });
    return response;
}