import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar w-full">
      <p
        onClick={() => navigate('/offer')}
        className="Navbar-para cursor-pointer bg-[#2A2728] text-white p-1 text-sm flex justify-center font-bold"
      >
        Free Delivery From 6 Bottles ➡️ Offer
      </p>
      <div className="px-6 mr-3">
        <div className="Navbar-menu flex justify-between items-center text-sm pt-0 mt-0 ">
          <div onClick={() => navigate('/')} className="flex cursor-pointer items-center gap-5">
            <img src="/Images/wine-logo.jpg" alt="logo" className="w-32 h-20 max-h-fit" />
            <div className="cursor-pointer hover:underline hover:font-bold">Wines</div>
            <div className="cursor-pointer hover:underline hover:font-bold">Subscription</div>
            <div className="cursor-pointer hover:underline hover:font-bold">Our Mission</div>
            <div className="cursor-pointer hover:underline hover:font-bold">Blog</div>
          </div>
          <div className="flex gap-5">
            <div className="cursor-pointer hover:underline hover:font-bold">Reusable Bottle</div>
            <div className="cursor-pointer hover:underline hover:font-bold">Professional Access</div>
            <div className="cursor-pointer hover:underline hover:font-bold">|EN|</div>
            <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faUser} style={{ color: '#b4b5b6' }} />
            </div>
            <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faCartShopping} style={{ color: '#b5b5b5' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
