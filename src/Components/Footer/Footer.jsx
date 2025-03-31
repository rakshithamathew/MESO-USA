import React, { useState } from 'react';
import facebook from '../../assets/f.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/insta.svg';
import emailImg from '../../assets/email.svg';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscriptionStatus('Please enter a valid email address');
            return;
        }

        try {
            // Simulated API call (replace with actual backend endpoint)
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubscriptionStatus('Thank you for subscribing!');
                setEmail(''); // Clear input after successful subscription
            } else {
                setSubscriptionStatus('Subscription failed. Please try again.');
            }
        } catch (error) {
            setSubscriptionStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full relative bg-[#faf3ec] text-left text-[20px] text-[#4b2c5e] font-helvetica">
            <div className="bg-[#dcc0a7] w-full pt-8 pb-4">
                <div className="container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo and Company Info */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="w-[219px] h-[222.7px] text-[35.58px] font-georgia relative">
                                <img className="w-full h-full" alt="Logo" src={Logo} />
                                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Logo</div> */}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-3 md:text-left relative right-[135px]">
                        <NavLink
            to="/"
            style={{ textDecoration: 'none' }}
            className={({ isActive }) =>
              `font-helvetica font-normal text-[24px] cursor-pointer ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/MesothMainPage"
            style={{ textDecoration: 'none' }}
            className={({ isActive }) =>
              `font-helvetica font-normal text-[24px] cursor-pointer ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
              }`
            }
          >
            Mesothelioma
          </NavLink>
          <NavLink
            to="/AboutMain"
            style={{ textDecoration: 'none' }}
            className={({ isActive }) =>
              `font-helvetica font-normal text-[24px] cursor-pointer ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'
              }`
            }
          >
            About us
          </NavLink> </div>

                        {/* Newsletter */}
                        <div className="flex flex-col space-y-4">
                            <form onSubmit={handleSubscribe} className="w-full max-w-[436px] mx-auto md:mx-0">
                                <b className="block text-[18px] mb-4 font-bold font-['Helvetica']">
                                    Join our newsletter
                                </b>

                                <div className="flex">
                                    {/* <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email id"
                                        className="flex-1 rounded-l-[10px] border border-[rgba(75,44,94,0.52)] px-6 py-4 text-[20px] outline-none"
                                    /> */}
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email id"
                                        className="flex-1 rounded-l-[10px] border-2 border-[#4B2C5E] px-6 py-4 text-[20px] outline-none bg-[#DCC0A7] placeholder-[#4B2C5E]"
                                    />

                                    <button
                                        type="submit"
                                        className="rounded-r-[10px] bg-[#4b2c5e] px-6 py-4 text-[#f8f2e9]"
                                    >
                                        <b>Subscribe</b>
                                    </button>
                                </div>
                                {subscriptionStatus && (
                                    <div className="mt-2 text-[16px]">
                                        {subscriptionStatus}
                                    </div>
                                )}
                            </form>

                            {/* Contact Info */}
                            <div className="flex items-center justify-center md:justify-end space-x-4 mt-8">
                                <img className="w-8 h-8" alt="" src={emailImg} />
                                <a className="text-[18px] underline leading-[34px] font-['Helvetica'] text-[#4B2C5E]"
                                    href="mailto:info@connect2attorney.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    info@connect2attorney.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}


                    {/* Footer Bottom */}
                    <div className="mt-8 pt-4 border-t border-[#f3e2c8] flex items-center justify-between text-[rgba(75,44,94,0.66)]">
                        <div>
                            <span className="text-[18px] font-medium font-['Helvetica'] text-[#c6c3c3] mr-2">©</span>
                            <span>2025.</span>
                            <span className="ml-2">All rights reserved</span>
                        </div>
                        <div>
                            <div className="flex justify-center space-x-6 mt-8" >
                                <div className="w-[61px] h-[62px]">
                                    <img className="w-full h-full" alt="Social" src={facebook} />
                                </div>
                                <img className="w-[61px] h-[62px]" alt="Social" src={twitter} />
                                <div className="w-[61px] h-[62px]">
                                    <img className="w-full h-full" alt="Social" src={linkedin} />
                                </div>
                                <div className="w-[61px] h-[62px]">
                                    <img className="w-full h-full" alt="Social" src={instagram} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;