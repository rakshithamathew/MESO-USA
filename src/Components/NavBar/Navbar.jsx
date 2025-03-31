import React from "react";
import phoneVector1 from '../../assets/phone-vector-1.svg';
import phoneVector2 from '../../assets/phone-vector-2.svg';
import phoneVector3 from '../../assets/phone-vector-3.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
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
            <div className="w-[48px] h-[48px] rounded-full bg-[#4B2C5E] border-2 border-[#4B2C5E] flex items-center justify-center">
              <div className="relative w-[24px] h-[24px]">
                <img src={phoneVector1} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
                <img src={phoneVector2} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
                <img src={phoneVector3} alt="Phone Icon" className="absolute top-0 left-0 w-full h-full" />
              </div>
            </div>
          </div>
          <div className="text-left">
            <p className="font-helvetica font-normal text-[16px] text-[#4B2C5E] m-0 mb-[5px]">Call Us For Help</p>
            <p className="font-helvetica font-bold text-[24px] text-[#4B2C5E] m-0">2625151485</p>
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
  );
};

export default Navbar;