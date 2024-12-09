import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet";
import { FcEmptyTrash } from "react-icons/fc";
import useAllBlogs from "../../../../hooks/useAllBlogs";
import BlogsCard from "./BlogsCard";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Blogs = () => {
    const [allBlogs, , refetch] = useAllBlogs(); // Fetch all blogs
    const axiosPublic = useAxiosPublic();

    // Pagination state
    const [searchResults, setSearchResults] = useState([]); // Initialize as an empty array
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const totalPage = Math.ceil(searchResults.length / postPerPage);
    const currentPosts = searchResults.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPage) setCurrentPage(currentPage + 1);
    };

    const pageNumber = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(
            <button
                key={i}
                className={`join-item btn btn-square transition-colors duration-300 ${currentPage === i ? "" : " hover:bg-gray-200"}`}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </button>
        );
    }

    // Search state
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Reset searchResults if searchText is empty
        if (searchText.trim() === "") {
            setSearchResults(allBlogs);  // Reset to all blogs
        } else {
            // Fetch search results from the server
            axiosPublic.get(`/allSearch/${searchText}`)
                .then(res => {
                    // Check if the response contains a `data` field which is an array
                    if (Array.isArray(res.data)) {
                        setSearchResults(res.data); // If the response is directly an array
                    } else if (res.data && Array.isArray(res.data.data)) {
                        // If the response contains an object with a `data` property which is an array
                        setSearchResults(res.data.data); // Access the `data` array
                    } else {
                        console.error("Expected an array, but received:", res.data);
                        setSearchResults([]); // In case of unexpected structure, set to an empty array
                    }
                })
                .catch(err => {
                    console.error("Error fetching data:", err);
                    setSearchResults([]); // In case of error, set to empty array
                });
        }
    }, [searchText, allBlogs, axiosPublic]); // Depend on allBlogs and searchText



    // short dropdown for sorting
    const [isOpen, setIsOpen] = useState(false);

    const handleDisplaySort = (sort) => {
        const sortedBlogs = searchResults.slice().sort((a, b) => {
            const dateA = new Date(a.date); // Convert the date string to Date object
            const dateB = new Date(b.date);

            // Sort based on the selected sort type
            return sort === 'Ascending'
                ? dateA - dateB  // Ascending order: earliest date first
                : dateB - dateA; // Descending order: latest date first
        });
        setSearchResults(sortedBlogs);
    };

    const handleSortSelection = (sortType) => {
        handleDisplaySort(sortType);
    };


    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="navbar border rounded-lg shadow-md mx-auto md:px-20 px-3 p-2">
                <div className="flex-1 " >
                    <form className="flex items-center">
                        <label className="input input-bordered flex items-center gap-2 border-gray-300 hover:border-blue-500 focus-within:border-blue-500 transition duration-200">
                            <input
                                type="text"
                                className="grow py-2 px-3 bg-transparent placeholder-gray-400 focus:outline-none"
                                name="searchText"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </form>
                </div>
                <div className="flex items-center z-10">
                    <details className="dropdown" onToggle={(e) => e.preventDefault()}>
                        <summary className="m-1 btn flex items-center border border-gray-300 hover:bg-gray-200 rounded-md transition duration-200">
                            Sort By Date <IoIosArrowDown className="ml-1" />
                        </summary>
                        <ul className="p-2 shadow-lg menu dropdown-content z-10 bg-white rounded-box py-2 px-5">
                            <li onClick={() => handleSortSelection('Ascending')}>
                                <a className="hover:bg-gray-200 rounded-md py-1 px-2 transition duration-200 text-gray-700">Ascending</a>
                            </li>
                            <li className="border-t-2" onClick={() => handleSortSelection('Descending')}>
                                <a className="hover:bg-gray-200 rounded-md py-1 px-2 transition duration-200 text-gray-700">Descending</a>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>

            <div className="mb-5">
                <div className='mt-10'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center uppercase py-8 mt-6 mb-2">All Blogs</h1>
                </div>

                {/* Blogs Grid Layout */}
                <div className="flex justify-center items-center">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
                        {currentPosts && currentPosts.length > 0 ? (
                            currentPosts.map((requestItem, index) => (
                                <><BlogsCard key={requestItem._id} requestItem={requestItem} index={index + firstPostIndex} /></>

                            ))
                        ) : (


                            <h1 className="text-red-500 text-center">Empty</h1>


                        )}
                    </div>
                </div>

                {/* Pagination */}
                <div className="pagination-controls mt-8 flex justify-center items-center gap-2">
                    <button
                        className="btn btn-outline px-4 py-2 disabled:opacity-50"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {pageNumber}
                    <button
                        className="btn btn-outline px-4 py-2 disabled:opacity-50"
                        onClick={handleNext}
                        disabled={currentPage === totalPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
