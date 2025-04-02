import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Drawer from '../../assets/drawer.png'
import CallIcon from '../../assets/phoneIcon.png'
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "2625151485";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden mobile-navbar">
        <div className="mobile-navbar-container">
          <div className="mobile-logo">
            <h1 className="font-helvetica font-normal text-[18px] text-black m-0">Logo</h1>
          </div>

          <div className="mobile-controls">
            <div 
              className="phone-icon"
              onClick={handlePhoneClick}
            >
              <div className="relative w-[20px] h-[20px]">
                <img src={CallIcon} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <IoClose size={24} className="text-[#4B2C5E]" />
              ) : (
                <img src={Drawer} alt="Menu" className="w-[24px] h-[24px] object-contain" />
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-backdrop" onClick={closeMenu}></div>
          <div className={`mobile-nav-panel ${isOpen ? 'open' : ''}`}>
            <div className="mobile-nav-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/MesothMainPage"
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                Mesothelioma
              </NavLink>
              <NavLink
                to="/AboutMain"
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                About us
              </NavLink>
              <div
                className="mobile-claim-button"
                onClick={() => {
                  closeMenu();
                  navigate('/ClaimForm');
                }}
              >
                <span className="font-helvetica font-bold text-[18px] text-[#F5E7DA]">Claim Form</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block desktop-navbar">
        <div className="flex items-center justify-between p-[20px] px-[50px] bg-[#FAF3EC] w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="bg-white p-[10px] px-[20px] mr-[25px]">
              <h1 className="font-helvetica font-normal text-[20px] text-black m-0">Logo</h1>
            </div>

            <div className="flex gap-[40px] justify-center items-center">
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
              </NavLink>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <div className="flex items-center justify-center">
                <div 
                  className="w-[48px] h-[48px] rounded-full border-2 border-[#4B2C5E] flex items-center justify-center cursor-pointer"
                  onClick={handlePhoneClick}
                >
                  <div className="relative w-[24px] h-[24px]">
                    <img src={CallIcon} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-helvetica font-normal text-[16px] text-[#4B2C5E] m-0 mb-[5px]">Call Us For Help</p>
                <p className="font-helvetica font-bold text-[24px] text-[#4B2C5E] m-0">{phoneNumber}</p>
              </div>
            </div>
            <div
              className="bg-[#4B2C5E] rounded-[60px] p-[10px] px-[20px] cursor-pointer ml-[25px]"
              onClick={() => navigate('/ClaimForm')}
            >
              <span className="font-helvetica font-bold text-[20px] text-[#F5E7DA]">Claim Form</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;