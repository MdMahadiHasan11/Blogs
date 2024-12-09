import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // For icons

const About = () => {
    return (
        <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">About Me</h1>
                    <p className="mt-4 text-lg text-gray-600">Innovative and dedicated full-stack developer passionate about continuous learning and growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-gray-800">Md Mahadi Hasan</h2>
                        <p className="mt-2 text-lg text-gray-600">Full-Stack Developer | Programmer | Technology Enthusiast</p>
                        <p className="mt-4 text-base text-gray-700">
                            I am a passionate full-stack developer with expertise in modern technologies like React.js, MongoDB, Node.js, and many more.
                            I enjoy building scalable, efficient, and user-centric web applications. With a strong foundation in both front-end and back-end development, 
                            I am always eager to enhance my skills and contribute to impactful projects.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
                        <ul className="mt-4 space-y-3 text-lg text-gray-700">
                            <li className="flex items-center">
                                <FaReact className="text-2xl text-blue-500 mr-2" />
                                React.js
                            </li>
                            <li className="flex items-center">
                                <FaNodeJs className="text-2xl text-green-500 mr-2" />
                                Node.js
                            </li>
                            <li className="flex items-center">
                                <FaJava className="text-2xl text-red-500 mr-2" />
                                JavaScript (ES6)
                            </li>
                            <li className="flex items-center">
                                <FaHtml5 className="text-2xl text-orange-500 mr-2" />
                                HTML5
                            </li>
                            <li className="flex items-center">
                                <FaCss3Alt className="text-2xl text-blue-600 mr-2" />
                                CSS3, Tailwind CSS
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">My Objective</h3>
                    <p className="mt-4 text-lg text-gray-600">
                        As a developer, my goal is to build efficient, scalable, and user-centric applications. I am constantly looking for opportunities to grow and learn 
                        new technologies to create innovative solutions for real-world problems. I am also eager to collaborate in a team environment and contribute to impactful projects.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
                    <p className="mt-4 text-base text-gray-700">You can reach me at:</p>
                    <p className="text-lg font-semibold text-gray-800">Email: <span className="text-blue-600">mdmahadihasancse@gmail.com</span></p>
                    <p className="text-lg font-semibold text-gray-800">Phone: <span className="text-blue-600">+8801774938275</span></p>
                    <p className="text-lg font-semibold text-gray-800">Location: <span className="text-blue-600">Ishwardi, Pabna, Rajshahi, Bangladesh</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;
