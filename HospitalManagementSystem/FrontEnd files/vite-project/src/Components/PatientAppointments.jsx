import { useState } from "react";

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", age: 45, date: "2024-02-12", time: "10:00 AM", reason: "Consultation", email: "johndoe@example.com" },
  ]);
  const [formData, setFormData] = useState({ id: null, name: "", age: "", date: "", time: "", reason: "", email: "" });
  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setAppointments(appointments.map((appointment) => (appointment.id === formData.id ? formData : appointment)));
      setEditing(false);
    } else {
      setAppointments([...appointments, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: null, name: "", age: "", date: "", time: "", reason: "", email: "" });
  };

  const handleEdit = (appointment) => {
    setFormData(appointment);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Patient Appointments</h1>
      
      <input type="text" placeholder="Search by name..." value={search} onChange={handleSearch} className="w-full p-2 border rounded mb-4" />

      <form onSubmit={handleSubmit} className="mb-4 space-y-2 bg-gray-100 p-4 rounded-lg">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Patient Name" className="w-full p-2 border rounded" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="w-full p-2 border rounded" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="text" name="reason" value={formData.reason} onChange={handleChange} placeholder="Reason for Visit" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {editing ? "Update" : "Add"} Appointment
        </button>
      </form>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Reason for Visit</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} className="text-center">
              <td className="border p-2">{appointment.name}</td>
              <td className="border p-2">{appointment.age}</td>
              <td className="border p-2">{appointment.date}</td>
              <td className="border p-2">{appointment.time}</td>
              <td className="border p-2">{appointment.email}</td>
              <td className="border p-2">{appointment.reason}</td>
              <td className="border p-2">
                <button onClick={() => handleEdit(appointment)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(appointment.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAppointments;
