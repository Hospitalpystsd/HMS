import { useState } from "react";

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", age: 45, reason: "Heart Disease", mailId: "johndoe@example.com", appointmentDate: "2025-02-04", time: "10:00 AM" },
    { id: 2, name: "Jane Smith", age: 38, reason: "Diabetes", mailId: "janesmith@example.com", appointmentDate: "2025-02-03", time: "11:30 AM" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newAppointment, setNewAppointment] = useState({ id: "", name: "", age: "", reason: "", mailId: "", appointmentDate: "", time: "" });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const addOrUpdateAppointment = () => {
    if (newAppointment.name && newAppointment.age && newAppointment.reason && newAppointment.mailId && newAppointment.appointmentDate && newAppointment.time) {
      if (newAppointment.id) {
        // Update existing appointment
        const updatedAppointments = appointments.map((appointment) =>
          appointment.id === newAppointment.id ? { ...newAppointment } : appointment
        );
        setAppointments(updatedAppointments);
      } else {
        // Add new appointment
        setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
      }
      setNewAppointment({ id: "", name: "", age: "", reason: "", mailId: "", appointmentDate: "", time: "" });
    }
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (appointment) => {
    setNewAppointment(appointment);
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Patient Appointments</h2>
      <input
        type="text"
        placeholder="Search by name or reason..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 w-full mb-4"
      />
      <div className="mb-4 flex gap-2 flex-wrap">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newAppointment.name}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newAppointment.age}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason for Visit"
          value={newAppointment.reason}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="email"
          name="mailId"
          placeholder="Mail ID"
          value={newAppointment.mailId}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="date"
          name="appointmentDate"
          value={newAppointment.appointmentDate}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <button onClick={addOrUpdateAppointment} className="bg-blue-500 text-white p-2 rounded">
          {newAppointment.id ? "Update" : "Add"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Reason</th>
              <th className="border p-2">Mail ID</th>
              <th className="border p-2">Appointment Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border p-2">{appointment.name}</td>
                <td className="border p-2">{appointment.age}</td>
                <td className="border p-2">{appointment.reason}</td>
                <td className="border p-2">{appointment.mailId}</td>
                <td className="border p-2">{appointment.appointmentDate}</td>
                <td className="border p-2">{appointment.time}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(appointment)}
                    className="bg-green-500 text-white p-1 mx-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAppointment(appointment.id)}
                    className="bg-red-500 text-white p-1 mx-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAppointments;
