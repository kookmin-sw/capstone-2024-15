import axios, {AxiosResponse} from 'axios';
import {IGetQuestion} from "@/types/Question";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const getQuestion = async ({ questionId } : IGetQuestion) => {
   const response: AxiosResponse = await axios.get(`${API_ENDPOINT}/question/${questionId}`);
   return response;
};