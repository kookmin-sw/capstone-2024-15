import axios, {AxiosResponse} from 'axios';
import {IMakeProject} from "@/types/Project";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const makeProject = async ({ name, description, select, userId } : IMakeProject) => {
    const response: AxiosResponse = await axios.post(`${API_ENDPOINT}/project`, {
        name,
        description,
        select,
        userId,
    });
    return response;
};