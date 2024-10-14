import axiosInstance from "../utils/axios.instance";

export const getComments = (page:number, limit:number) =>
  axiosInstance(`/comments?_page=${page}&_limit=${limit}`, {
    method: "GET",
  });
