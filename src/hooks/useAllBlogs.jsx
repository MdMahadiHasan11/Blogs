import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxiosPublic from "./useAxiosPublic";

const useAllBlogs = () => {
 
    const axiosPublic =useAxiosPublic();

    const {data : blogs =[] , isPending : loading ,refetch } = useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res= await axiosPublic.get('/allBlogs');
            return res.data
        }
      })

    return [blogs,loading ,refetch]
}
export default useAllBlogs;