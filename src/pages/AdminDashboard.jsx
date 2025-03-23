import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdmissionForm from "../components/AdmissionForm";
import ViewStudentDetails from "../components/ViewStudentDetails";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch student list from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admission");
        setStudents(response.data);
        
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  // Open View Details Modal
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  // Close View Details Modal
  const closeDetailsModal = () => {
    setSelectedStudent(null);
  };

  // Remove Student
  const handleRemoveStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admission/${id}`);
        setStudents(students.filter((student) => student._id !== id));
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-16">
      {/* Top Bar with Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-700"
            onClick={() => setIsFormOpen(true)}
          >
            Add New Student
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => navigate("/admin/messages")}
          >
            View Messages
          </button>
        </div>
      </div>

      {/* Admission Form Modal */}
      {isFormOpen && (
        <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-full  shadow-lg">
            <button
              className="absolute top-2 right-5 text-gray-100 hover:text-gray-900"
              onClick={() => setIsFormOpen(false)}
            >
              ✖
            </button>
            <AdmissionForm />
          </div>
        </div>
      )}

      {/* Student List Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 ">Name</th>
              <th className="p-4 ">Mobile</th>
              <th className="p-4 ">Joining Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b">
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.mobileNumber}</td>
                <td className="p-4">
                  {new Date(student.joiningDate).toLocaleDateString()}
                </td>
                <td className="p-4 flex space-x-2 items-end justify-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(student)}
                  >
                    View Details
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleRemoveStudent(student._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <ViewStudentDetails
          selectedStudent={selectedStudent}
          closeDetailsModal={closeDetailsModal}
        />
      )}
    </div>
  );
}
