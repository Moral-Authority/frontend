import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import Account from "images/account.png";
const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row bg-white">
      <section className="w-full lg:w-1/2 flex flex-col py-10 px-8 sm:py-24 sm:px-36 items-start mx-auto bg-white min-h-screen">
        <h1 className="text-3xl">Welcome!</h1>
        <LoginForm />
      </section>
      <section className="w-full flex items-center justify-center lg:items-start lg:w-1/2 lg:peer-first:h-full bg-[#FBF7EC]">
        <img src={Account} className="h-full sm:h-96 lg:h-fit px-20" alt="" />
      </section>
    </div>
  );
};

export default Login;
