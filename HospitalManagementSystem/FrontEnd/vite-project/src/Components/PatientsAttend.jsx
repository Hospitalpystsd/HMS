import { useState } from "react";

const PatientsAttended = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 45, date: "2025-02-04", time: "10:00 AM", reason: "Heart Disease", mailId: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", age: 38, date: "2025-02-03", time: "11:30 AM", reason: "Diabetes", mailId: "janesmith@example.com" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newPatient, setNewPatient] = useState({ id: "", name: "", age: "", date: "", time: "", reason: "", mailId: "" });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const addOrUpdatePatient = () => {
    if (newPatient.name && newPatient.age && newPatient.date && newPatient.time && newPatient.reason && newPatient.mailId) {
      if (newPatient.id) {
        // Update existing patient
        const updatedPatients = patients.map((patient) =>
          patient.id === newPatient.id ? { ...newPatient } : patient
        );
        setPatients(updatedPatients);
      } else {
        // Add new patient
        setPatients([...patients, { ...newPatient, id: Date.now() }]);
      }
      setNewPatient({ id: "", name: "", age: "", date: "", time: "", reason: "", mailId: "" });
    }
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (patient) => {
    setNewPatient(patient);
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Patients Attended</h2>
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
          value={newPatient.name}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPatient.age}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="date"
          name="date"
          value={newPatient.date}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="time"
          name="time"
          value={newPatient.time}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason for Visit"
          value={newPatient.reason}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <input
          type="email"
          name="mailId"
          placeholder="Mail ID"
          value={newPatient.mailId}
          onChange={handleChange}
          className="border p-2 flex-1 min-w-[150px]"
        />
        <button onClick={addOrUpdatePatient} className="bg-blue-500 text-white p-2 rounded">
          {newPatient.id ? "Update" : "Add"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Reason</th>
              <th className="border p-2">Mail ID</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="border p-2">{patient.name}</td>
                <td className="border p-2">{patient.age}</td>
                <td className="border p-2">{patient.date}</td>
                <td className="border p-2">{patient.time}</td>
                <td className="border p-2">{patient.reason}</td>
                <td className="border p-2">{patient.mailId}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(patient)}
                    className="bg-green-500 text-white p-1 mx-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePatient(patient.id)}
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

export default PatientsAttended;
