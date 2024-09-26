import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/Mutations.js';
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import * as jwt_decode from "jwt-decode";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          input: { 
            email: state.email,
            password: state.password,
          },
        },
      });
      if (response.data) {
        setShowPopup(true);
        const userData = {
          id: response.data.login.user._id,
          email: response.data.login.user.email,
        };
        dispatch({
          type: "SET_USER",
          user: userData,
        });
        localStorage.setItem('authToken', response.data.login.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 700);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Google Login Success Handler
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

    // Optionally, send the token to the backend for authentication and user creation.
    console.log("Google user logged in:", googleUserData);
    navigate("/"); // Redirect after Google login
  };

  // const handleGoogleFailure = (error) => {
  //   console.error("Google login failed:", error);
  // };

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

        {/* Google Sign-In Button */}
        {/* <div className="mt-5">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div> */}

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
          <p>Oh no! That's the wrong email or password please try again.</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
