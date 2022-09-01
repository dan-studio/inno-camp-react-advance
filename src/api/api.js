import axios from "axios";
const URL = process.env.REACT_APP_SERVER_URL_MUSIC;
const instance = axios.create({ baseURL: URL });
export const getItems = async (page, limit) => {
  const response = await instance.get(`/?_page=${page}&_limit=${limit}`);
  return response.data;
};
