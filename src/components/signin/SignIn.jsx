import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../../assets/images/login/Login.png';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      setError('Both fields are required.');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay of 3 seconds
      const response = await axios.post(
        "http://davidphenom.pythonanywhere.com/start-exam/",
        {
          code: credentials.password,
          name: credentials.username,
        }
      );
      console.log(credentials.username, credentials.password);
      setResponseMessage(`Welcome, ${response.data.userName}`);
      setError(null);
      navigate('/welcome', { state: { userName: response.data.userName } });
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to login. Please try again.");
      setResponseMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  return (
    <div className='bg-gray-200 pt-[50px] h-screen'>
      <div className="flex flex-col lg:flex-row justify-center py-[40px]">
        <div className="flex flex-col gap-[40px] pl-[30px] pt-[50px] px-[30px] py-[10px] lg:px-[90px] lg:py-[30px] bg-[#043A3B] rounded">
          <div className="ml-[3px] lg:ml-[20px]">
            <h1 className="text-[32px] text-white font-[600] font-[Montserrat]">
              Login
            </h1>
          </div>
          <div className="ml-[3px] lg:ml-[20px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              <div>
                <label htmlFor="username" className="label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </div>

              {error && <div className="text-red-500">{error}</div>}
              {responseMessage && <div className="text-green-500">{responseMessage}</div>}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="border border-white text-[16px] text-white font-[Montserrat] font-[400] w-[9rem] rounded-md py-[10px] mt-[40px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Logging in...
                    </div>
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <img
            src={Login}
            alt="Login illustration"
            className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-tl-xl rounded-bl-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
