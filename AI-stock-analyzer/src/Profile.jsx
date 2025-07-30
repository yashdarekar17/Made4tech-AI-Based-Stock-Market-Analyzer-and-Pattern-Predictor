import React, { useState, useEffect } from 'react';
import Header from './Header2';
import Footer from './Footer';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        setError('You are not logged in.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch user profile.');

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSendOtp = async () => {
    const token = localStorage.getItem('jwt_token');
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/users/verification/EMAIL/send-otp', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to send OTP.');

      setMessage('An OTP has been sent to your email.');
      setShowOtpInput(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerifyOtp = async () => {
    const token = localStorage.getItem('jwt_token');
    setMessage('');
    setError('');

    try {
      const response = await fetch(`/api/users/enable-two-factor/verify-otp/${otp}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Invalid OTP. Please try again.');

      const updatedUser = await response.json();
      setUser(updatedUser);
      setShowOtpInput(false);
      setMessage('Two-Factor Authentication has been successfully enabled!');
    } catch (err) {
      setError(err.message);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p>No user data found.</p>
      </div>
    );
  }

  return (
    <>
    <Header/>
     <div className="flex justify-center items-center min-h-screen bg-gray-900 font-sans text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">User Profile</h2>

        <div>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p className="mt-2"><strong>Email:</strong> {user.email}</p>
        </div>

        <hr className="border-gray-700" />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Two-Factor Authentication (2FA)</h3>

          <div className="flex items-center">
            <p><strong>Status:</strong></p>
            <span className={`ml-2 font-semibold ${user.twoFactorAuth?.enabled ? 'text-green-400' : 'text-red-400'}`}>
              {user.twoFactorAuth?.enabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>

          {!user.twoFactorAuth?.enabled && !showOtpInput && (
            <button
              onClick={handleSendOtp}
              className="w-full px-4 py-2 font-semibold bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Enable 2FA
            </button>
          )}

          {showOtpInput && (
            <div className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP from your email"
                className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full px-4 py-2 font-semibold bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Verify OTP
              </button>
            </div>
          )}

          {message && <p className="mt-4 text-center text-green-400">{message}</p>}
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Profile;
