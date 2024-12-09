import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://medicine-world-server.vercel.app'https://assigment-server-sigma.vercel.app/
    baseURL:'https://assigment-server-sigma.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;