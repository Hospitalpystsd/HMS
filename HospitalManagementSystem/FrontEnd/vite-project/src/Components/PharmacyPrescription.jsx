import { useState } from "react";

const PharmacyPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newPrescriptions = Array.from(files).map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setPrescriptions((prev) => [...prev, ...newPrescriptions]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Pharmacy Prescription</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        multiple
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2"
      />
      
      {prescriptions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Uploaded Prescriptions</h3>
          <ul className="list-disc pl-5">
            {prescriptions.map((prescription, index) => (
              <li key={index} className="mb-2">
                <a
                  href={prescription.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {prescription.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PharmacyPrescription;
