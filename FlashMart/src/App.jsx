// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import CategoriesPage from './Pages/CategoriesPage';
import CategoryPage from './Pages/CategoryPage';
import LoginModal from './pages/LoginModal';
import SignUpModal from './pages/SignUpModal';

import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      {/* Header stays on top */}
      <Header
        onLoginClick={() => setIsLoginOpen(true)} // opens login modal
      />

      {/* Main content area */}
      <main className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
        </Routes>
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignUp={() => {
          setIsLoginOpen(false);
          setIsSignUpOpen(true);
        }}
      />

      {/* SignUp Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToLogin={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
}

export default App;
