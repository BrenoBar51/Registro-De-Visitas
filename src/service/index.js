import axios from "axios";

export const api = axios.create({
  baseURL: 'https://museu-api-db.onrender.com/'
});