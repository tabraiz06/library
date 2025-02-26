import { useState } from "react";

export default function AdmissionForm() {
  const [userdata, setUserData] = useState({
    name: "",
    fatherName: "",
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
    console.log("hello world")
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userdata.name);
    formData.append("fatherName", userdata.fatherName);
    formData.append("email", userdata.email);
    formData.append("address", userdata.address);
    formData.append("mobileNumber", userdata.mobileNumber);
    formData.append("studentImage", studentImage);
    formData.append("aadharFront", aadharFront);
    formData.append("aadharBack", aadharBack);

    const response = await fetch("http://localhost:5000/api/admission", {
      method: "POST",
      body: formData,
  });

    const text = await response.json(); // Get raw response
    console.log("Raw Server Response:", text);
    if(response.status === 201){
      alert("Admission form submitted successfully");
      setUserData({
        name: "",
        fatherName: "",
        email: "",
        address: "",
        mobileNumber: "",
      });
      
      setStudentImage(null);
      setAadharFront(null);
      setAadharBack(null);
      window.location.reload();
    }
    else{
      alert("Something went wrong. Please try again later");
    }
};

  return (
    <section className="p-8 bg-gray-500 flex justify-center  relative" id="admission">
      <div
        className="w-full  bg-white  p-8 rounded-lg shadow-md mt-16"
        
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Admission Form</h2>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
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
