import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://apizingmp3.vercel.app',
  });