import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center border-b border-gray-300">
      <img src={logo} alt="Logo" className="h-8 mr-4" />
      <h1 className="text-xl font-semibold">Datman's Monitoring Dashboard</h1>
    </nav>
  );
};

export default Navbar;
