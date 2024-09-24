import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REQUEST_PASSWORD_RESET_MUTATION, RESET_PASSWORD_MUTATION } from "../../graphql/Mutations";
import { useNavigate, useLocation } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  const [requestPasswordReset] = useMutation(REQUEST_PASSWORD_RESET_MUTATION);
  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle password reset request
  const handleRequestReset = async () => {
    try {
      await requestPasswordReset({ variables: { email } });
      alert("Password reset link has been sent to your email.");
      setShowResetForm(true);
    } catch (error) {
      console.error("Error requesting password reset:", error);
    }
  };

  // Handle password reset submission
  const handlePasswordReset = async () => {
    try {
      await resetPassword({ variables: { token: resetToken, newPassword } });
      alert("Password has been reset successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="password-reset-container">
      {!showResetForm ? (
        <div>
          <h2>Request Password Reset</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRequestReset}>Request Password Reset</button>
        </div>
      ) : (
        <div>
          <h2>Reset Password</h2>
          <input
            type="text"
            placeholder="Enter your reset token"
            value={resetToken}
            onChange={(e) => setResetToken(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
