import React, { useState } from "react";
import { Link } from "react-router-dom";
import { graphql, useMutation } from "react-relay";

const CreateAccountMutation = graphql`
  mutation CreateAccountFormMutation($input: NewUser!) {
    addUser(input: $input) {
      id
      email
    }
  }
`;

const CreateAccountForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [commitMutation, isInFlight] = useMutation(CreateAccountMutation);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    console.log("Form Submitted with:", state);
  
    commitMutation({
      variables: {
        input: {
          email: state.email,
          password: state.password,
        },
      },
      onCompleted: (response, errors) => {
        if (errors) {
          console.error("Mutation completed with errors:", errors);
        } else {
          console.log("Account created successfully", response);
        }
      },
      onError: (err) => {
        console.error("Mutation error:", err);
      },
    });
  };
  
  return (
    <form
      className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]"
      onSubmit={submitHandler}
    >
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
        <button
          type="submit"
          className="w-full h-[51px] bg-[#D6AD60] text-white mt-5 shadow-xl">
          Create an account
        </button>
      </div>

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
