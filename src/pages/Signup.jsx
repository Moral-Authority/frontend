import React from "react";
import CreateAccountForm from "../components/Forms/CreateAccountForm";
import Account from "images/account.png";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row bg-white">
      <section className="w-full lg:w-1/2 flex flex-col py-10 px-8 sm:py-24 sm:px-36 items-start mx-auto bg-white min-h-screen">
        <h1 className="text-3xl">Hi, Welcome!</h1>
        <p className="text-sm sm:text-base text-[#777D88] mt-2">
        </p>
        <CreateAccountForm />
      </section>
      <section className="w-full flex items-center justify-center lg:items-start lg:w-1/2 lg:peer-first:h-full bg-[#FBF7EC]">
        <img src={Account} className="h-full sm:h-96 lg:h-fit px-20" alt="" />
      </section>
    </div>
  );
};

export default Signup;
