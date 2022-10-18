import React from "react";
import { Link } from "react-router-dom";
import Google from "images/google.png";

const LoginForm = () => {
  return (
    <form className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between">
          <label className="text-[#777D88]">Username</label>
          <span className="text-sm text-[#D6AD60]">Forgot username</span>
        </div>
        <input
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your username"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex justify-between">
          <label className="text-[#777D88]">Password</label>
          <span className="text-sm text-[#D6AD60]">Forgot password</span>
        </div>{" "}
        <input
          type="password"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button className="w-full h-[51px] bg-[#D6AD60] text-white mt-5 shadow-xl">
          Sign in
        </button>
      </div>
      <div>
        <button className="w-full h-[51px] border border-[#E3E7F4] bg-white text-[#777D88] mt-5  flex items-center justify-center">
          <img src={Google} alt="" />
          <span>Sign in with Google</span>
        </button>
      </div>
      <p>
        Already have an account?{" "}
        <span className="text-[#D6AD60] cursor-pointer">
          <Link to="/create-account">Sign up</Link>
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
