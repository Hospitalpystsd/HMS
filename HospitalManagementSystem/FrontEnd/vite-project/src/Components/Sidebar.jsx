import React from 'react'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="bg-gray-800 text-white items-start w-60 h-full">
      <div className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">DOCTOR</span>
      </div>
      <nav>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Patients Attended
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Patient Appointments 
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Pharmacy Prescription
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;