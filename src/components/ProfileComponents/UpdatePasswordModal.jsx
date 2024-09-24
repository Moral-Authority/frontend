import React, { useState } from "react";

const UpdatePasswordModal = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Implement your update password logic here
    if (newPassword === confirmPassword) {
      // Proceed with the password update
    } else {
      // Handle the case where passwords don't match
    }
    onClose();
  };

  return (
    <div className="modal bg-gray space-y-5 space-x-0">
      <div className="modal-content bg-[#f2f2eb] space-y-5 space-x-0 p-6 rounded-md">
        <h2></h2>
        <input
          type="password"
          className="placeholder:text-gray-500 focus:border-black focus:outline-none w-full p-2 border border-gray-300 rounded-md"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          className="placeholder:text-gray-500 focus:border-black focus:outline-none w-full p-2 border border-gray-300 rounded-md"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="placeholder:text-gray-500 focus:border-black focus:outline-none w-full p-2 border border-gray-300 rounded-md"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="flex" style={{ marginTop: '50%' }}>
          <button
            onClick={handleSubmit}
            className="bg-[#8f8e63] text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
