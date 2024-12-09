import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section - Website Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-semibold">Marrfa</h2>
                        <p className="mt-2 text-sm text-gray-200">
                            Discover insightful content, updates, and resources on the latest in programming and web development.
                        </p>
                    </div>

                    {/* Right Section - Links */}
                    <div className="flex space-x-6 text-sm text-gray-300">
                        <a href="/about" className="hover:text-secondary transition-colors duration-300">About</a>
                        <a href="/contact" className="hover:text-secondary transition-colors duration-300">Contact</a>
                        <a href="/privacy" className="hover:text-secondary transition-colors duration-300">Privacy Policy</a>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="bg-secondary py-4">
                <div className="max-w-screen-xl mx-auto px-6 text-center text-xs text-gray-100">
                    <p>&copy; {new Date().getFullYear()} Marrfa. All rights reserved.</p>
                    <p className="mt-2 text-sm">Designed by Md Mahadi Hasan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
