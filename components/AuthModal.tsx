"use client";

import React, { useState, useEffect } from 'react';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [stage, setStage] = useState<'login' | 'register' | 'verify'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);

  // Handle click outside to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgeConfirmed) {
      setError('You must confirm that you are 18 or older');
      return;
    }
    // Mock login for demo purposes
    if (email && password) {
      // Instead of logging in directly, show the verification screen
      // This is just for demo purposes - normally only registration would need verification
      setStage('verify');
      setError('');
    } else {
      setError('Please fill all fields');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgeConfirmed) {
      setError('You must confirm that you are 18 or older');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (email && password && confirmPassword) {
      // Send verification email
      setStage('verify');
      setError('');
    } else {
      setError('Please fill all fields');
    }
  };

  const handleVerificationInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    // Track verification attempts
    setVerificationAttempts(prevAttempts => prevAttempts + 1);
    
    if (code.length === 6) {
      // For demo purposes, always show error message
      if (verificationAttempts >= 1) {
        setError('Invalid verification code. Please try again or contact support.');
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } else {
      setError('Please enter the complete 6-digit code');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
      <button 
        className="absolute inset-0 bg-black/70 border-0 cursor-pointer" 
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-label="Close modal"
      />
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-2xl font-bold text-black">
            {stage === "login"
              ? "Login"
              : stage === "register"
                ? "Create Account"
                : "Verify Email"}
          </h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {stage === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-start">
              <input
                id="age-confirmation"
                type="checkbox"
                className="h-4 w-4 text-[#004cff] focus:ring-[#004cff] rounded mt-1"
                checked={isAgeConfirmed}
                onChange={(e) => setIsAgeConfirmed(e.target.checked)}
                required
              />
              <label htmlFor="age-confirmation" className="ml-2 block text-sm text-gray-700">
                I confirm that I am 18 years or older
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="text-[#004cff] font-medium hover:underline"
                onClick={() => {
                  setStage('register');
                  setError('');
                }}
              >
                Create one
              </button>
            </p>
          </form>
        )}

        {stage === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="register-email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="register-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-start">
              <input
                id="register-age-confirmation"
                type="checkbox"
                className="h-4 w-4 text-[#004cff] focus:ring-[#004cff] rounded mt-1"
                checked={isAgeConfirmed}
                onChange={(e) => setIsAgeConfirmed(e.target.checked)}
                required
              />
              <label htmlFor="register-age-confirmation" className="ml-2 block text-sm text-gray-700">
                I confirm that I am 18 years or older
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-[#004cff] font-medium hover:underline"
                onClick={() => {
                  setStage('login');
                  setError('');
                }}
              >
                Login
              </button>
            </p>
          </form>
        )}

        {stage === 'verify' && (
          <div className="space-y-6">
            <p className="text-sm mb-4 text-center text-gray-600">
              We&apos;ve sent a 6-digit verification code to your email.{" "}
              <br />Please enter it below.
            </p>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label htmlFor="code-0" className="block text-sm font-medium text-gray-700 mb-3">
                  Enter the verification code
                </label>
                <div className="flex justify-between gap-2">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-10 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004cff] focus:outline-none"
                      value={digit}
                      onChange={(e) => handleVerificationInput(index, e.target.value)}
                      onKeyDown={(e) => {
                        // Handle backspace to go to previous input
                        if (e.key === "Backspace" && !digit && index > 0) {
                          const prevInput = document.getElementById(`code-${index - 1}`);
                          if (prevInput) prevInput.focus();
                        }
                      }}
                      aria-label={`Verification code digit ${index + 1}`}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Verify
              </button>
              <p className="text-center text-sm text-gray-600">
                Didn&apos;t receive the code?{" "}
                <button
                  type="button"
                  className="text-[#004cff] font-medium hover:underline"
                  onClick={() => {
                    setError("Verification code resent. Please check your email.");
                  }}
                >
                  Resend
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal; 