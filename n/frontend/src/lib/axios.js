import axios from "axios";

export const axiosInstance =axios.create({
    baseURL:"https://backend-vert-delta.vercel.app/api/v1",
    withCredentials:true  //this means that we are allwoing cookies
})