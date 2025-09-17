import { useState } from 'react';
import LoginModal from './LoginModal';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Button to open login modal */}
      <button
        onClick={() => setIsLoginOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Login
      </button>

      {/* Login modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

export default App;