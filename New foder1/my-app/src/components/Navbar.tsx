import React, { useState } from 'react';
import axios from 'axios';

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', loginData);
      console.log(response.data);
      setShowLogin(false);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', registerData);
      console.log(response.data);
      setShowRegister(false);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="bg-green-500 p-4 text-black">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <div>
          <button className="mx-2" onClick={() => setShowLogin(true)}>Login</button>
          <button className="mx-2" onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-lightgreen-500 p-6 rounded">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-4 w-full text-black "
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full text-black"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
            </form>
            <button className="mt-4" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-lightgreen-500 p-6 rounded">
            <h2 className="text-2xl mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 mb-4 w-full text-black"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                className="border p-2 mb-4 w-full text-black"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Password"
                className="border p-2 mb-4 w-full text-black"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
              <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
            </form>
            <button className="mt-4" onClick={() => setShowRegister(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;