import React from "react";

const UpdatePhoneModal = ({ onClose, newPhone, setNewPhone, handleSubmit }) => {
  return (
    <div className="modal bg-gray space-y-5 space-x-0">
      <div className="modal-content bg-[#f2f2eb] space-y-5 space-x-0 p-6 rounded-md">
        <h2 className="text-lg font-sm"></h2>

        <input
          type="tel"
          className="placeholder:text-gray-500 focus:border-black focus:outline-none w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter new phone number"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
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

export default UpdatePhoneModal;
