import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import PatientsAttended from './Components/PatientsAttend';
import PatientAppointments from './Components/PatientAppointments';
import PharmacyPrescription from './Components/PharmacyPrescription';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function App() {
  return (
    <Router>
      
         <div className="w-full bg-gray-900 text-white flex justify-between p-4 items-center">
      <h1 className="text-xl font-bold">MEDICURE</h1>
      <img src="images.jpeg" alt="Profile" className="w-10 h-10 rounded-full" />
    </div>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-gray-900 text-white p-4">
          <div className="space-y-4">
            <Link to="/patient-appointments" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              Patient Appointments
            </Link>
            <Link to="/patients-attended" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              Patients Attended
            </Link>
            <Link to="/pharmacy-prescription" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              Pharmacy Prescription
            </Link>
          </div>
        </nav>

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/patients-attended" element={<PatientsAttended />} />
            <Route path="/patient-appointments" element={<PatientAppointments />} />
            <Route path="/pharmacy-prescription" element={<PharmacyPrescription />} />
          </Routes>
        </main>
      </div>
      <div className="w-full bg-gray-900 text-white text-center p-2">
      <p>&copy; 2025 Medicure. All Rights Reserved.</p>
    </div>
    </Router>
    
  )
}

export default App

