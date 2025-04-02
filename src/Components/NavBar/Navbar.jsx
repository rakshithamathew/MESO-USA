import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import Drawer from '../../assets/drawer.png'
import CallIcon from '../../assets/phoneIcon.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const phoneNumber = "2625151485";

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-[15px] bg-[#FAF3EC] w-full">
        {/* Logo */}
        <div className="bg-white p-[8px] px-[15px]">
          <h1 className="font-helvetica font-normal text-[18px] text-black m-0">Logo</h1>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {/* Phone Icon */}
          <div 
            className="w-[40px] h-[40px] rounded-full border-2 border-[#4B2C5E] flex items-center justify-center cursor-pointer"
            onClick={handlePhoneClick}
          >
            <div className="relative w-[20px] h-[20px]">
              <img src={CallIcon} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
            </div>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleDrawer}
            className="w-[40px] h-[40px] flex items-center justify-center"
          >
            {isDrawerOpen ? (
              <IoClose size={24} className="text-[#4B2C5E]" />
            ) : (
              <img src={Drawer} alt="Menu" className="w-[24px] h-[24px] object-contain" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-[70px] right-0 h-screen w-[250px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-4 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-helvetica font-normal text-[20px] p-2 ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/MesothMainPage"
            className={({ isActive }) =>
              `font-helvetica font-normal text-[20px] p-2 ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'}`
            }
          >
            Mesothelioma
          </NavLink>
          <NavLink
            to="/AboutMain"
            className={({ isActive }) =>
              `font-helvetica font-normal text-[20px] p-2 ${isActive ? 'text-[#2E4A7D]' : 'text-[#4B2C5E]'}`
            }
          >
            About us
          </NavLink>
          <div
            className="bg-[#4B2C5E] rounded-[60px] p-[10px] px-[20px] cursor-pointer mt-4 text-center"
            onClick={() => navigate('/ClaimForm')}
          >
            <span className="font-helvetica font-bold text-[18px] text-[#F5E7DA]">Claim Form</span>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between p-[20px] px-[50px] bg-[#FAF3EC] w-full">
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
    </>
  );
};

export default Navbar;