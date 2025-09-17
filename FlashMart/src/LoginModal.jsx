import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
export default function LoginModal({ isOpen, onClose, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Call your backend API
    console.log("Email:", email, "Password:", password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6">
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
            Login to your FlashMart Account!
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
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 text-left">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-left"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-left">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-left"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 flex justify-between text-sm text-blue-600">
           <Link to="/forgot-password" className="hover:underline">
    Forgotten Account?
  </Link>
            <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onSwitchToSignUp();
    }}
    className="hover:underline"
  >
    New User? Register
  </a>
          </div>
        </div>
      </div>
    </div>
  );
}
