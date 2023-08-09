import md5 from "md5";
import { api } from "./api";

export const getCharacters = async (page: number) => {
  const time = Number(new Date());
  const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
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

  return {
    data: response.data.data,
    pagination: {
      currentPage: page,
      total: Math.round(Number(response.data.data.total) / Number(pageLimit) / 15)
    }
  };
}

export const getOptionsCharacters = async (page: number) => {
  const time = Number(new Date());
  const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
  const pageLimit = 50;

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

export const getCharacterById = async (id: number) => {
  const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY!;
  const time = Number(new Date());

  const hash = md5(time + privateKey + apiKey);


  const response = await api.get(`characters/${id}`, {
    params: {
      ts: time,
      apikey: apiKey,
      hash: hash,
    }
  });

  return response.data;
}


