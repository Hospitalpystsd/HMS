import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PharmacyPrescription from "./Components/PharmacyPrescription";
import PatientsAttended from "./Components/PatientsAttend";
import PatientAppointments from "./Components/PatientAppointments";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hospital Management</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/patients-attended" className="hover:underline">Patients Attended</Link></li>
          <li><Link to="/patient-appointments" className="hover:underline">Patient Appointments</Link></li>
          <li><Link to="/pharmacy-prescription" className="hover:underline">Pharmacy Upload</Link></li>
        </ul>
      </nav>
      <div className="profile flex items-center space-x-2">
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        <span>Dr. John Doe</span>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <div className="p-6">
        <Routes>
          <Route path="/patients-attended" element={<PatientsAttended />} />
          <Route path="/patient-appointments" element={<PatientAppointments />} />
          <Route path="/pharmacy-prescription" element={<PharmacyPrescription />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
