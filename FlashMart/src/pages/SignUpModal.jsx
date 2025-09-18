import { useState } from "react";

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contact: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Call your backend API
    console.log("Form Data:", formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6 
                max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-red-500 text-sm font-bold hover:text-red-700"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="p-2">
          {/* Header */}
          <h2 className="text-xl font-bold mb-6 text-left text-gray-800">
            Create Your FlashMart Account!
          </h2>

          {/* Horizontal image */}
          <div className="flex justify-center mb-6">
            <img
              src="src/assets/cinematic-style-mall.jpg" // replace with your banner image path
              alt="Banner"
              className="w-100 h-30 object-cover rounded"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 text-left">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Subha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Re-Type Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-Type Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-1 focus:ring-gray-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          {/* Link to login */}
          <div className="mt-4 text-sm text-center text-blue-600">
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSwitchToLogin();
              }}
              className="hover:underline"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
