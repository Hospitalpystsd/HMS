import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import PatientsAttended from './Components/PatientsAttend';
import PatientAppointments from './Components/PatientAppointments';
import PharmacyPrescription from './Components/PharmacyPrescription';


function App() {
  return (
    
    <Router>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-gray-900 text-white p-4">
          <div className="space-y-4">
            <h1 className='text-2xl font-bold'>MEDILOG</h1>
            <Link to="/patients-attended" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              Patients Attended
            </Link>
            <Link to="/patient-appointments" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              Patient Appointments
            </Link>
            <Link to="/pharmacy-prescription" className="block p-3 hover:bg-gray-800 rounded transition-colors">
              PharmacyPrescription
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
    </Router>
  )
}

export default App

