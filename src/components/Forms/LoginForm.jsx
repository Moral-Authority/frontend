import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/Mutations.js'; // Adjust the path to where you store your mutations
import { useStateValue } from "@/utils/stateProvider/useStateValue"; // Import your context

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [, dispatch] = useStateValue(); // Use the dispatch function

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await login({
        variables: {
          input: {  // Ensure this matches the backend's expected input
            email: state.email,
            password: state.password,
          },
        },
      });
  
      if (response.data) {
        console.log("Login successful", response);
        setShowPopup(true);
  
        const userData = {
          id: response.data.login.user._id,
          email: response.data.login.user.email,
        };
  
        // Dispatch the login state and user ID to the global state
        dispatch({
          type: "SET_USER",
          user: userData,
        });
  
        // Save the user data and token in localStorage
        localStorage.setItem('authToken', response.data.login.token);
        localStorage.setItem('user', JSON.stringify(userData));
  
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2000);
      }
  
    } catch (err) {
      console.error("Login error:", err);
      if (err.networkError) {
        console.error("Network error:", err.networkError.result.errors);
      } else if (err.graphQLErrors) {
        err.graphQLErrors.forEach(({ message, locations, path }) => {
          console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
      }
    }
  };
  
  return (
    <div>
      <form className="mt-8 h-full flex flex-col space-y-5 w-full text-[#777D88]" onSubmit={submitHandler}>
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
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p>
          Don't have an account?{" "}
          <span className="text-[#D6AD60] cursor-pointer">
            <Link to="/create-account">Sign up</Link>
          </span>
        </p>
      </form>

      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white p-3 rounded shadow-lg">
            <p>Login successful! Redirecting...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-2">
          <p>Failed to log in. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
