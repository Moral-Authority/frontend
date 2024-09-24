import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { VERIFY_EMAIL_MUTATION } from "../../graphql/Mutations";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [verifyEmail] = useMutation(VERIFY_EMAIL_MUTATION);


  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    if (token) {
      verifyEmail({
        variables: { token },
        onCompleted: () => {
          alert("Email verified successfully!");
          navigate("/login");
        },
        onError: (error) => {
          console.error("Error verifying email:", error);
          alert("Failed to verify email.");
        },
      });
    }
  }, [verifyEmail, location, navigate]);



  return  <p>Verifying your email, please wait...</p>;
};

export default VerifyEmail;