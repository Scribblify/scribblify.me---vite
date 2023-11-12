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
      url: `${import.meta.env.VITE_REACT_BASE_URL}${url}`,
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
        ...headers,
      },
    });
  };
  return request;
};
