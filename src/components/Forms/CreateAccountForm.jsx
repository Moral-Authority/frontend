import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT_MUTATION } from '../../graphql/Mutations.js'; // Adjust the path to where you store your mutations

const CreateAccountForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const navigate = useNavigate();

  // Use Apollo's useMutation hook
  const [createAccount, { loading, error }] = useMutation(CREATE_ACCOUNT_MUTATION);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await createAccount({
        variables: {
          input: {
            email: state.email,
            password: state.password,
          },
        },
      });
      
      console.log("Account created successfully", response);
      setShowPopup(true); // Show popup on success

      // Redirect after a delay to allow the user to see the popup
      setTimeout(() => {
        setShowPopup(false);
        navigate("/login");
      }, 2000); // 2 seconds delay

    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <div>
      <form
        className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-[#777D88]">Email</label>
          <input
            id="email"
            value={state.email}
            onChange={changeHandler}
            name="email"
            type="email"
            className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-[#777D88]">Password</label>
          <input
            id="password"
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
            className="w-full h-[51px] bg-[#75744e] text-white mt-5 shadow-xl"
            disabled={loading} // Disable the button while the mutation is in progress
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>
        </div>

        <p>
          Already have an account?{" "}
          <span className="text-[#75744e] cursor-pointer">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </form>

      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white p-3 rounded shadow-lg">
            <p>Account created successfully! Please login to continue. You will be re-directed in just a moment.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-2">
          <p>Failed to create account. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default CreateAccountForm;
