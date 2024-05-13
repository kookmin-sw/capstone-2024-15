import axios, {AxiosResponse} from 'axios';
import {IJoin, ILogin} from "@/types/User";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

// api 호출 test 코드
export const login = async ({ email, password } : ILogin ): Promise<AxiosResponse> => {
  console.log(API_ENDPOINT);
  const response: AxiosResponse = await axios.post(`${API_ENDPOINT}/user/login`, {
    email,
    password,
  });
  return response;
};

export const join = async ({ email, password, name } : IJoin ): Promise<AxiosResponse> => {
  const response : AxiosResponse = await axios.post(`${API_ENDPOINT}/user/register`, {
    email,
    password,
    name,
  });
  return response;
};

export const emailValid = async (email : string): Promise<AxiosResponse> => {
  const response : AxiosResponse = await axios.post(`${API_ENDPOINT}/user/valid`, {
    email,
  });
  return response;
};

export const initPassword = async (email: string): Promise<AxiosResponse> => {
  if (!email) return;
  const response: AxiosResponse = await axios.post(`${API_ENDPOINT}/user/reset-password`, {
    email,
  });
  return response;
}
