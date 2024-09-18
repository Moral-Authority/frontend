import React from "react";
import LoginForm from "../components/Forms/LoginForm";
const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
    <section className="w-full lg:w-1/3 flex flex-col py-10 px-8 sm:py-24 sm:px-36 items-start bg-white">
      <h1 className="text-2xl">Welcome Back!</h1>
      <p className="text-sm sm:text-base text-[#777D88] mt-2"></p>
      <LoginForm />
    </section>
    </div>
  );
};

export default Login;
