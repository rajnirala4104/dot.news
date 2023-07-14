import axios from "axios";
import { BASE_URL, timeOut } from "./constants";

export const http = axios.create({
    baseURL: BASE_URL,
    timeout: timeOut
})

