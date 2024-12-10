import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://assigment-server-3aro38483-mahadi-hasans-projects-4d0eced2.vercel.app'
    baseURL:'https://blogs-server-gamma.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;