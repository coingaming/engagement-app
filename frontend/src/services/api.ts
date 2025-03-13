import axios from "axios";

const API_URL = "http://localhost:5999";

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchHello = async () => {
  const response = await api.get("/api/hello");
  return response.data;
};
