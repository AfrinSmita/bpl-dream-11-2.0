import React from 'react';
import shadow2 from '../../assets/bg-shadow.png'
import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className="relative bg-gray-900 text-white mt-50 left-0 ">

            <footer className="pt-32 pb-10 px-10 w-full">
                <div className='flex justify-center items-center my-16'>
                    <img className='center' src={logo} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                {/* About Us */}
                <div className='text-left'>
                    <h3 className="font-bold mb-2">About Us</h3>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

                {/* Quick Links */}
                <div className='mx-auto'>
                    <h3 className="font-bold mb-2">Quick Links</h3>
                    <ul className='list-disc list-inside mx-auto text-left'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className='text-left'>
                    <h3 className="font-bold mb-2">Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex mt-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-2 rounded-l-md bg-gray-50 flex-1 text-gray-900"
                    />
                    <button className="bg-gradient-to-r from-pink-400 to-yellow-400 px-4 rounded-r-md font-bold text-black">
                        Subscribe
                    </button>
                    </div>
                </div>

                </div>
                <p className="text-center mt-10 text-gray-400">&copy; 2026 Afsana Afrin Esmita. All Rights Reserved.</p>
            </footer>

            {/* Floating Newsletter Card */}
            <div className='border-2 border-gray-100 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl'>
                <div className=' bg-white rounded-xl py-10 px-30 bg-cover bg-center'
                style={{ backgroundImage: `url(${shadow2})` }}>
                <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-black">Subscribe to our Newsletter</h2>
                <p className="text-gray-600">Get the latest updates and news right in your inbox!</p>
                </div>
                <div className="flex justify-between w-full mt-4 gap-4">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="p-2 border border-gray-300 rounded-md text-black w-full"
                />
                <button className="bg-gradient-to-r from-pink-400 to-yellow-400 px-4 rounded-md font-bold text-black">
                    Subscribe
                </button>
                </div>
            </div>
            </div>

            </div>

        </div>
    );
};

export default Footer;