import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
});

//get
export const getResponse = async <ResponseType>(
  url: string
): Promise<ResponseType | null> => {
  try {
    const response = await instance.get<ResponseType>(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
    return null;
  }
};

// post
export const postResponse = async <ResponseType>(
  url: string
): Promise<ResponseType | null> => {
  try {
    const response = await instance.post<ResponseType>(url);
    console.log(response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
    return null;
  }
};
