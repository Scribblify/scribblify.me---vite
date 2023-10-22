import axios from "axios";

interface AxiosProp {
  url: string;
  method?: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  body?: object;
  headers?: object;
  includeToken?: boolean;
  params?: object;
}

export const useAxios = () => {
  const request = async (props: AxiosProp) => {
    const {
      url,
      method = "GET",
      body,
      headers,
      params,
      includeToken = true,
    } = props;
    return await axios({
      method,
      // url: `https://api.scribblify.me${url}`,
      // url: `http://localhost:8080${url}`,
      // url: `https://scribblify.abduvoitov.com${url}`,
      url: `https://docs.scribblify.me/${url}`,
      data: {
        ...body,
      },
      params: {
        ...params,
      },
      headers: {
        Authorization: `${
          includeToken && `Bearer ${localStorage.getItem("token")}`
        }`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.scribblify.me",
        ...headers,
      },
    });
  };
  return request;
};
