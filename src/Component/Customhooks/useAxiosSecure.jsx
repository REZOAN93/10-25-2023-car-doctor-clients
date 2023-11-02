import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://10-25-2023-car-doctor-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
