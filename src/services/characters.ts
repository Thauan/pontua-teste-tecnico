import md5 from "md5";
import { api } from "./api";

export const getCharacters = async (page: number) => {
  const time = Number(new Date());
  const apiKey = '82445f859bec46b92c34b967d6602a97';
  const privateKey = '6a0670572c66ff8f3850207c6b5e2a0cac4e30e1';
  const pageLimit = 10;

  const hash = md5(time + privateKey + apiKey);


  const response = await api.get('characters?', {
    params: {
      ts: time,
      apikey: apiKey,
      limit: pageLimit,
      hash: hash,
      offset: page * pageLimit,
    }
  });

  return response.data;
}

export const getOptionsCharacters = async (page: number) => {
  const time = Number(new Date());
  const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey =import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
  const pageLimit = 100;

  const hash = md5(time + privateKey + apiKey);


  const response = await api.get('characters?', {
    params: {
      ts: time,
      apikey: apiKey,
      limit: pageLimit,
      hash: hash,
      offset: page * pageLimit,
    }
  });

  return response.data;
}


