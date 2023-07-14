import { BASE_URL } from '../constants';
import { http } from "../http";

export const  getAllNews = ()=>{
    return http.get(BASE_URL)
}
