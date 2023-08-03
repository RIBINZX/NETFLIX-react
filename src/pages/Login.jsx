import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">SIGN IN</h1>
              <form className="flex flex-col w-full h-full py-4" action="">
                <input
                  className="p-3 my-2 bg-gray-600 opacity-[70%]  rounded"
                  type="email"
                  placeholder="Email"
                  name=""
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-600 opacity-[70%]  rounded"
                  type="password"
                  placeholder="Password"
                  name=""
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  SIGN IN
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" name="" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">
                    New to netflix? 
                  </span>

                  <Link to="/signup">
                    <span> signup</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login