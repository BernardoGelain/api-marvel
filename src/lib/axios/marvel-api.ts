import md5 from "md5";
import axios from "axios";

export const marvelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_API_URL,
});

marvelApi.interceptors.request.use((config) => {
  const timestamp = new Date().getTime();
  const hash = md5(
    timestamp +
      String(process.env.NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY) +
      process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY
  );

  config.params = {
    ...config.params,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY,
    ts: timestamp,
    hash,
  };
  return config;
});
