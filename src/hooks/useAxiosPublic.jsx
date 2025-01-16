import axios from "axios";

const isLocal = window.location.hostname === 'localhost';

const axiosPublic = axios.create({
    baseURL: isLocal 
        ? 'http://localhost:5000' 
        : 'https://blogs-server-gamma.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;