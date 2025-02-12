import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white shadow-md">
      <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-lg">Dr. John Doe</span>
        <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Header;