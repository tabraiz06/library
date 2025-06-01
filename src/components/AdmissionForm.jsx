import { useState } from "react";

export default function AdmissionForm() {
  const [userdata, setUserData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    gender: "",
    qualification: "",
    joiningDate: "",
    shift: "",
    timing: "",
    package: "",

    email: "",

    address: "",
    mobileNumber: "",
  });
  const [studentImage, setStudentImage] = useState(null);
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log("hello world");
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userdata.name);
    formData.append("fatherName", userdata.fatherName);
    formData.append("dob", userdata.dob);
    formData.append("gender", userdata.gender);
    formData.append("qualification", userdata.qualification);
    formData.append("joiningDate", userdata.joiningDate);
    formData.append("shift", userdata.shift);
    formData.append("timing", userdata.timing);
    formData.append("package", userdata.package);
    formData.append("email", userdata.email);
    formData.append("address", userdata.address);
    formData.append("mobileNumber", userdata.mobileNumber);
    formData.append("studentImage", studentImage);
    formData.append("aadharFront", aadharFront);
    formData.append("aadharBack", aadharBack);

    const response = await fetch("https://maa-lakshmi-library-backend-ozig.vercel.app/api/admission", {
      method: "POST",
      body: formData,
      headers: {
        // 'Content-Type': 'multipart/form-data' // No need to set this header, fetch will handle it
        authorization: `Bearer ${localStorage.getItem("adminToken")}`, // Include token for authentication
      },
    });

    const text = await response.json(); // Get raw response
    console.log("Raw Server Response:", text);
    if (response.status === 201) {
      alert("Admission form submitted successfully");
      setUserData({
        name: "",
        fatherName: "",
        dob: "",
        gender: "",
        qualification: "",
        joiningDate: "",
        shift: "",
        timing: "",
        package: "",

        email: "",

        address: "",
        mobileNumber: "",
      });

      setStudentImage(null);
      setAadharFront(null);
      setAadharBack(null);
      window.location.reload();
    } else {
      alert("Something went wrong. Please try again later");
    }
  };

  return (
    <section className="p-8  flex justify-center  relative" id="admission">
      <div className="w-full  bg-white  p-8 rounded-lg shadow-md  overflow-hidden max-h-[90vh]">
        <h2 className="text-3xl font-bold mb-6 text-center">Admission Form</h2>
        <form
          className="grid grid-cols-2 gap-4 overflow-auto h-[75vh]"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter student name"
              name="name"
              value={userdata.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Father's Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter father's name"
              name="fatherName"
              value={userdata.fatherName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter date of birth"
              name="dob"
              value={userdata.dob}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="gender"
              value={userdata.gender}
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter address"
              name="address"
              value={userdata.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              name="email"
              value={userdata.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
              name="mobileNumber"
              value={userdata.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Qualification
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter qualification"
              name="qualification"
              value={userdata.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Joining Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter joining date"
              name="joiningDate"
              value={userdata.joiningDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Shift
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="shift"
              value={userdata.shift}
              onChange={handleInputChange}
            >
              <option value="">Select shift</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
              <option value="A+B">A+B</option>
              <option value="B+C">B+C</option>
              <option value="C+D">C+D</option>
              <option value="W+X">W+X</option>

              <option value="Y+Z">Y+Z</option>
              <option value="A+B+C+D">A+B+C+D</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Timing
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="timing"
              value={userdata.timing}
              onChange={handleInputChange}
            >
              <option value="">Select timing</option>
              <option value="6AM-10AM">6:00AM - 10:00AM</option>
              <option value="10AM-2PM">10:00AM - 02:00PM</option>
              <option value="2PM-6PM">2:00PM - 6:00PM</option>
              <option value="6PM-10PM">6:00PM - 10:00PM</option>
              <option value="6PM-12AM">06:00PM - 12:00AM</option>
              <option value="12AM-6PM">12:00AM - 06:0PM</option>
              <option value="10AM-4PM">10:00AM - 04:00PM</option>
              <option value="4PM-10PM">04:00PM - 10:00PM</option>
              <option value="6AM-2PM">06:00AM - 02:00PM</option>
              <option value="2PM-10PM">02:00PM - 10:00PM</option>
              <option value="10AM-6PM">10:00AM - 06:00PM</option>
              <option value="6AM-6PM">06:00AM - 06:00PM</option>
              <option value="10AM-10PM">10:00AM - 10:00PM</option>
              <option value="6AM-10PM">06:00AM - 10:00PM</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Package
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter package"
              name="package"
              value={userdata.package}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Student Image
            </label>
            <input
              type="file"
              className="w-full border rounded-lg px-3 py-2"
              name="studentImage"
              value={userdata.studentImage}
              onChange={(e) => setStudentImage(e.target.files[0])}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar Card Front Image
            </label>
            <input
              type="file"
              className="w-full border rounded-lg px-3 py-2"
              name="aadharFront"
              value={userdata.aadharFront}
              onChange={(e) => setAadharFront(e.target.files[0])}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar Card Back Image
            </label>
            <input
              type="file"
              className="w-full border rounded-lg px-3 py-2"
              name="aadharBack"
              value={userdata.aadharBack}
              onChange={(e) => setAadharBack(e.target.files[0])}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
