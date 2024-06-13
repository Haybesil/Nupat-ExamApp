import React from 'react';
import Login from '../../assets/images/login/Login.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className='bg-gray-200 pt-[50px]'>
        <div className="flex justify-center py-[40px] ">
          <div className="flex flex-col gap-[40px]  pl-[30px] pt-[50px] px-[90px] py-[30px] bg-[#043A3B] rounded">
            <div className="ml-[20px]">
              <h1 className="text-[32px] text-white font-[600] font-[Monserrat]">
                Hello
              </h1>
            </div>
            <div className="ml-[20px]">
              <form action="" className="flex flex-col gap-[20px]">
                <div>
                  <label htmlFor="" className="label">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="" className="label">
                    Course
                  </label>
                  <select type="text" placeholder="" className="input">
                    <option value="" className="option">
                      Select an Option
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                    <option value="" className="option">
                      Frontend Development
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="" className="label">
                    Cohort
                  </label>
                  <select type="text" placeholder="" className="input">
                    <option value="" className="option">
                      Select an option
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                    <option value="" className="option">
                      January
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input"
                  />
                </div>

                <div className="flex justify-center">
                  <button className="border border-white text-[16px] text-white font-[Montserrat] font-[400] w-[9rem]  rounded-md py-[10px] mt-[40px]">
                   <Link to= '/welcome'>Login</Link> 
                  </button>
                </div>

                {/* <div>
                    <p className='text-[14px] font-[400] font-[Montserrat] flex gap-[10px] items-center justify-center'>Already have an account?{''} <Link to='/signin' className='text-[16px] text-nupatColor font-[600] font-[Montserrat]'>Sign in</Link> </p>
                </div> */}
              </form>
            </div>
          </div>

          <div>
            <img
              src={Login}
              alt=""
              className="w-[500px] h-[500px] rounded-tl-xl rounded-bl-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
