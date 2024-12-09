import React, { useContext, useState } from 'react';
import { AuthContext } from '../../routes/authProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { IoIosLogIn, IoIosPerson, IoIosLogOut } from 'react-icons/io';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

    const handleSignOut = () => {
        logOut().catch(err => console.error(err));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <nav className="bg-primary text-white py-4 shadow-md">
            <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-2xl font-semibold">
                    <NavLink to="/" className="hover:text-secondary transition-colors duration-300">
                        Marrfa
                    </NavLink>
                </div>

                {/* Navbar Links for Desktop */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink
                        to="/blog"
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300"
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300"
                    >
                        About
                    </NavLink>

                    {/* User Authentication Links */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    alt="User Avatar"
                                    src={user.photoURL || "https://i.ibb.co/qW320MT/images.jpg"}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-sm font-medium">
                                <span>Welcome, {user.displayName}</span>
                            </div>

                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
                            >
                                <IoIosLogOut className="text-lg" />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <NavLink
                                to="/login"
                                className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors duration-300"
                            >
                                Login <IoIosLogIn className="text-lg" />
                            </NavLink>

                            <NavLink
                                to="/signUp"
                                className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors duration-300"
                            >
                                Sign Up <IoIosPerson className="text-lg" />
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white text-2xl">
                        {/* Hamburger Icon */}
                        <span className="material-icons">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center mt-4">
                    <NavLink
                        to="/blog"
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300 py-2"
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300 py-2"
                    >
                        About
                    </NavLink>

                    {user ? (
                        <>
                            <div className="text-sm font-medium py-2">
                                <span>Welcome, {user.displayName}</span>
                            </div>

                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200 py-2"
                            >
                                <IoIosLogOut className="text-lg" />
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <NavLink
                                to="/login"
                                className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors duration-300 py-2"
                            >
                                Login <IoIosLogIn className="text-lg" />
                            </NavLink>

                            <NavLink
                                to="/signUp"
                                className="flex items-center gap-1 text-sm font-medium hover:text-secondary transition-colors duration-300 py-2"
                            >
                                Sign Up <IoIosPerson className="text-lg" />
                            </NavLink>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
