import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://lvthai-zingmp3-api.herokuapp.com/api',
  });