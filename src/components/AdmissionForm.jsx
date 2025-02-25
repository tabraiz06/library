export default function AdmissionForm() {
  return (
    <section className="p-8 bg-gray-100 flex justify-center">
      <div className="w-full  bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Admission Form</h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter student name"
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
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Student Image
            </label>
            <input type="file" className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar Card Front Image
            </label>
            <input type="file" className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar Card Back Image
            </label>
            <input type="file" className="w-full border rounded-lg px-3 py-2" />
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
