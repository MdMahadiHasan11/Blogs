import { useState } from "react";
import { FaEye } from "react-icons/fa";
import BlogsDetails from "./BlogsDetails";  // Ensure that BlogsDetails component is correctly imported

const BlogsCard = ({ requestItem, index }) => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                {/* Blog Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{requestItem.title}</h2>
                    <p className="text-sm text-gray-600">{new Date(requestItem.date).toLocaleDateString()}</p>
                </div>

                {/* Blog Content */}
                <p className="text-sm text-gray-700 mb-6 line-clamp-3">{requestItem.content}</p>

                {/* Category & Tags */}
                <div className="flex justify-between items-center mb-6">
                    {/* Category */}
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-semibold text-gray-800">Category:</span>
                        <span className="text-xs text-gray-600">{requestItem.category}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-semibold text-gray-800">Tags:</span>
                        <div className="flex gap-1 flex-wrap">
                            {requestItem.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View Details Button */}
                <div className="flex justify-center items-center gap-3">
                    <button
                        onClick={() => setModal(true)}
                        className="btn btn-outline hover:bg-blue-600 hover:text-white transition-colors duration-200 text-blue-600 font-semibold flex items-center gap-1 px-4 py-2 rounded-full"
                        aria-label={`View details for ${requestItem.title}`}
                    >
                        <FaEye className="text-lg" />
                        <span className="hidden sm:inline">View</span>
                    </button>
                </div>
            </div>

            {/* Modal for Blog Details */}
            {modal && (
                <BlogsDetails
                    requestItem={requestItem}
                    onClose={() => setModal(false)}
                />
            )}
        </>
    );
};

export default BlogsCard;
