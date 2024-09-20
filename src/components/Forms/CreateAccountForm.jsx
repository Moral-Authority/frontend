import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT_MUTATION } from "../../graphql/Mutations.js";
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import * as jwt_decode from "jwt-decode";
import { useStateValue } from "@/utils/stateProvider/useStateValue"; // Import your context

const CreateAccountForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [, dispatch] = useStateValue(); // Use the dispatch function

  // Use Apollo's useMutation hook
  const [createAccount, { loading, error }] = useMutation(CREATE_ACCOUNT_MUTATION);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!validateEmail(state.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(state.password)) {
      validationErrors.password =
        "Password must be at least 8 characters long, contain at least one number, and one special character.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  // Google Sign-In Success Handler
  const handleGoogleSuccess = (response) => {
    const decoded = jwt_decode(response.credential); // Decode the JWT token from Google
    const googleUserData = {
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
      sub: decoded.sub,
    };

    // Dispatch Google user data to global state or send it to your backend for further processing
    dispatch({
      type: "SET_USER",
      user: googleUserData,
    });

    console.log("Google user registered:", googleUserData);
    navigate("/"); // Redirect after Google registration
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign-up failed:", error);
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
          {errors.email && <p className="text-red-500">{errors.email}</p>}
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
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full h-[51px] bg-[#75744e] text-white mt-5 shadow-xl"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>
        </div>

          {/* Google Sign-Up Button */}
          {/* <div className="mt-5">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div> */}

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
