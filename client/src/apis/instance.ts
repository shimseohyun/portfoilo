import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5001/api",
  // baseURL: '',
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

export interface BaseDTO<ResponseType> {
  status: string;
  code: number;
  message: string;
  data: ResponseType;
}

//get
export const getResponse = async <ResponseType>(
  url: string
): Promise<ResponseType | null> => {
  try {
    const response = await instance.get<BaseDTO<ResponseType>>(url);
    console.log(response);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
    return null;
  }
};
