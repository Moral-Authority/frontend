import React from "react";
import { CameraIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Google from "images/google.png";

const CreateAccountForm = () => {
  return (
    <form className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]">

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">First Name</label>
        <input
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter first name"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Last Name</label>
        <input
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter last name"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Email</label>
        <input
          type="email"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Phone number</label>
        <input
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <button className="w-full h-[51px] bg-[#D6AD60] text-white mt-5 shadow-xl">
          Create an account
        </button>
      </div>
      {/* <div>
        <button className="w-full h-[51px] border border-[#E3E7F4] bg-white text-[#777D88] mt-5  flex items-center justify-center">
          <img src={Google} alt="" />
          <span>Sign up with Google</span>
        </button>
      </div> */}
      <p>
        Already have an account?{" "}
        <span className="text-[#D6AD60] cursor-pointer">
          <Link to="/login">Sign in</Link>
        </span>
      </p>
    </form>
  );
};

export default CreateAccountForm;
