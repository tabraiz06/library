import React from "react";

const ViewStudentDetails = ({ selectedStudent, closeDetailsModal }) => {
  return (
    <div className="fixed z-50 h-[90vh] overflow-auto mt-16 p-4 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-3xl shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={closeDetailsModal}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-6">Student Details</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Left: Details */}
          <div>
            <div className="mb-3">
              <label className="font-semibold block">Name:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.name}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Father's Name:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.fatherName}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Email:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.email}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Address:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.address}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Mobile:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.mobileNumber}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Joining Date:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {new Date(selectedStudent.joiningDate).toLocaleDateString()}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Shift:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.shift}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Timing:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.timing}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block">Package:</label>
              <div className="border rounded px-2 py-1 bg-gray-50">
                {selectedStudent.package}
              </div>
            </div>
          </div>
          {/* Right: Student Image */}
          <div className="flex flex-col items-center justify-start">
            <label className="font-semibold mb-2">Student Image:</label>
            <img
              src={selectedStudent.studentImage}
              alt="Student"
              className="w-48 h-48 rounded-md object-cover border"
            />
          </div>
        </div>
        {/* Bottom: Aadhar Images */}
        <div className="mt-8">
          <label className="font-semibold block mb-2">Aadhar Card:</label>
          <div className="flex space-x-6">
            <img
              src={selectedStudent.aadharFront}
              alt="Aadhar Front"
              className="w-40 h-28 rounded-md object-cover border"
            />
            <img
              src={selectedStudent.aadharBack}
              alt="Aadhar Back"
              className="w-40 h-28 rounded-md object-cover border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentDetails;
