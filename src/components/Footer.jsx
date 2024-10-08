import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-lg mb-4">
                            We are committed to bringing you the best experience at the Puagmae Festival. Join us for an unforgettable celebration of culture and tradition.
                        </p>
                        <p className="text-lg">Contact us for more information and updates.</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <FaEnvelope className="text-goldenrod text-2xl mr-4" />
                                <a href="mailto:info@example.com" className="text-lg">info@example.com</a>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-goldenrod text-2xl mr-4" />
                                <a href="tel:+1234567890" className="text-lg">+123 456 7890</a>
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="text-goldenrod text-2xl mr-4" />
                                <span className="text-lg">1234 Street, City, Country</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-goldenrod transition duration-300">Home</a></li>
                            <li><a href="#about" className="hover:text-goldenrod transition duration-300">About</a></li>
                            <li><a href="#schedule" className="hover:text-goldenrod transition duration-300">Schedule</a></li>
                            <li><a href="#gallery" className="hover:text-goldenrod transition duration-300">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-goldenrod transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:text-white transition duration-300">
                                <FaLinkedinIn className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-12 text-center">
                    <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Puagmae Festival. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
