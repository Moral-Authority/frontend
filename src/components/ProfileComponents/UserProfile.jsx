import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../../graphql/Queries.js';
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import UpdateEmailModal from './UpdateEmailModal';
import UpdatePhoneModal from './UpdatePhoneModal';
import UpdatePasswordModal from './UpdatePasswordModal';

const UserProfile = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const userId = user?.id;

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  if (!userId) {
    navigate("/login");
    return null;
  }

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id: userId },
  });

  if (data == null && !loading && !error) {  
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({
      type: "SET_USER",
      user: null,
    });
    navigate('/');
  };

  if (error)  {  
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({
      type: "SET_USER",
      user: null,
    });
    navigate('/');
  };
  if (loading) return <p>Loading profile...</p>;

  const { email, phone } = data.user;

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({ type: "SET_USER", user: null });
    navigate('/');
  };

  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start w-full">
      <div className="bg-[#D6AD60]/20 w-100 relative flex justify-center"></div>

      <div className="py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-center">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="pl-2">{email}</span>
          </p>
          <button
            onClick={() => setShowEmailModal(true)}
            className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ml-auto"
          >
            Update
          </button>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-center">
            <PhoneIcon className="h-6 w-6" />
            <span className="pl-2">{phone}</span>
          </p>
          <button
            onClick={() => setShowPhoneModal(true)}
            className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ml-auto"
          >
            Update
          </button>
        </div>

        <div className="flex justify-between items-center">
          <button 
            onClick={logoutHandler} 
            className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm"
          >
            Sign Out
          </button>
          <button
            onClick={() => setShowPasswordModal(true)}
            className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ml-auto"
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Modals */}
      {showEmailModal && <UpdateEmailModal onClose={() => setShowEmailModal(false)} email={email} />}
      {showPhoneModal && <UpdatePhoneModal onClose={() => setShowPhoneModal(false)} phone={phone} />}
      {showPasswordModal && <UpdatePasswordModal onClose={() => setShowPasswordModal(false)} />}
    </div>
  );
};

export default UserProfile;
