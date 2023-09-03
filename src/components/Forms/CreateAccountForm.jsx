import React, { useState } from "react";
import { CameraIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Google from "images/google.png";
import { graphql, useMutation } from "react-relay";

const CreateAccountMutation = graphql`
  mutation CreateAccountFormMutation($input: NewUser!) {
    addUser(input: $input) {
      _id
      firstName
      lastName
      email
    }
  }
`;

const CreateAccountForm = () => {
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const [commitMutation, isInFlight] = useMutation(CreateAccountMutation);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    commitMutation({
      variables: {
        input: {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          password: state.password,
        },
      },
    });
  };

  return (
    <form
      className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">First Name</label>
        <input
          value={state.firstName}
          onChange={changeHandler}
          name="firstName"
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter first name"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Last Name</label>
        <input
          value={state.lastName}
          onChange={changeHandler}
          name="lastName"
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter last name"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Email</label>
        <input
          value={state.email}
          onChange={changeHandler}
          name="email"
          type="email"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Phone number</label>
        <input
          value={state.phone}
          onChange={changeHandler}
          name="phone"
          type="text"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-[#777D88]">Password</label>
        <input
          value={state.password}
          onChange={changeHandler}
          name="password"
          type="password"
          className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
          placeholder="Enter your password"
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
