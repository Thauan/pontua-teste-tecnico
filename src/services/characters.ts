import md5 from "md5";
import { api } from "./api";

export const getCharacters = async () => {
    const time = Number(new Date());
    const apiKey = '82445f859bec46b92c34b967d6602a97';
    const privateKey = '6a0670572c66ff8f3850207c6b5e2a0cac4e30e1';

    const hash = md5(time + privateKey + apiKey);

    const response = await api.get(`characters?ts=${time}&apikey=${apiKey}&hash=${hash}`);
    // &nameStartsWith=&orderBy=name&limit=100

    return response.data;
}
