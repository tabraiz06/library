import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  // Delete message
  const handleDeleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`http://localhost:5000/api/contact/${id}`);
        setMessages(messages.filter((message) => message._id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      {/* Messages Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id} className="border-b">
                <td className="p-4">{message.name}</td>
                <td className="p-4">{message.email}</td>
                <td className="p-4">{message.phone}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    onClick={() => setSelectedMessage(message)}
                  >
                    View Message
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteMessage(message._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setSelectedMessage(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Message Details</h2>
            <p>
              <strong>Name:</strong> {selectedMessage.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedMessage.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedMessage.phone}
            </p>
            <p>
              <strong>Message:</strong> {selectedMessage.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
