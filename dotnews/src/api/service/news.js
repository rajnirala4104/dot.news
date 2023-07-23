import { BASE_URL } from "../constants";
import { http } from "../http";

export const getNews = () => {
   return http.get(BASE_URL);
};
