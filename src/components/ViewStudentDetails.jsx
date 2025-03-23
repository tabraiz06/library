import React from 'react'

const ViewStudentDetails = ({ selectedStudent , closeDetailsModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={closeDetailsModal}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">Student Details</h2>
        <p>
          <strong>Name:</strong> {selectedStudent.name}
        </p>
        <p>
          <strong>Father's Name:</strong> {selectedStudent.fatherName}
        </p>
        <p>
          <strong>Email:</strong> {selectedStudent.email}
        </p>
        <p>
          <strong>Address:</strong> {selectedStudent.address}
        </p>
        <p>
          <strong>Mobile:</strong> {selectedStudent.mobile}
        </p>
        <p>
          <strong>Joining Date:</strong>{" "}
          {new Date(selectedStudent.joiningDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Student Image:</strong>
        </p>
        <img
          src={selectedStudent.studentImage}
          alt="Student"
          className="w-32 h-32 rounded-md object-cover"
        />
        <p>
          <strong>Aadhar Card:</strong>
        </p>
        <div className="flex space-x-2">
          <img
            src={selectedStudent.aadharFront}
            alt="Aadhar Front"
            className="w-32 h-32 rounded-md object-cover"
          />
          <img
            src={selectedStudent.aadharBack}
            alt="Aadhar Back"
            className="w-32 h-32 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewStudentDetails
