import { useEffect, useRef } from "react";

const BlogsDetails = ({ requestItem, onClose }) => {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = "hidden";
        return () => {
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = "auto";
        };
    }, []);

    // Modal setup
    const modalRef = useRef();
    const closeModel = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div 
            ref={modalRef} 
            onClick={closeModel} 
            className='fixed z-50 inset-0 max-w-screen-xl mx-auto bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center'
        >
            <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Close button */}
                <button 
                    onClick={onClose} 
                    className='absolute top-4 right-4 btn py-2 px-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-200'
                >
                    X
                </button>

                {/* Blog Card Content */}
                <div className="p-6">
                    <div className="flex flex-col gap-4">
                        {/* Blog Title */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold text-gray-900">{requestItem.title}</h2>
                            <p className="text-sm text-gray-500">{`By ${requestItem.author} | ${new Date(requestItem.date).toLocaleDateString()}`}</p>
                        </div>

                        {/* Blog Content */}
                        <p className="mt-4 text-lg text-gray-800">{requestItem.content}</p>

                        {/* Blog Info: Category and Tags */}
                        <div className="flex justify-between items-center my-4">
                            <p className="text-sm text-gray-600">
                                Category: <span className="font-semibold text-primary">{requestItem.category}</span>
                            </p>
                            <div className="flex gap-2">
                                {requestItem.tags.map((tag, index) => (
                                    <span key={index} className="text-xs text-white bg-secondary rounded-full px-2 py-1">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;
