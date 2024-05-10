import axios, { AxiosResponse } from 'axios';

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const getProjects = async (userId: string) => {
  if (!userId) return;
  try {
    const response = await axios.get(`${API_ENDPOINT}/project/user/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export const deleteProject = async (projectId: number) => {
  try {
    const response = await axios.delete(`${API_ENDPOINT}/project/${projectId}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
