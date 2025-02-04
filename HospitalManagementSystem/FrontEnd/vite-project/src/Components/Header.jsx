const Header = ({ numberOfPatients, successfulCases }) => {
  return (
    <div className="bg-gray-700 text-white flex justify-between items-center p-4">
      <div className="text-xl font-bold">Dashboard</div>
      <div className="flex space-x-6">
        <div className="flex items-center">
          <span className="mr-2">Patients:</span>
          <span className="font-bold">{numberOfPatients}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Successful Cases:</span>
          <span className="font-bold">{successfulCases}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Profile</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
