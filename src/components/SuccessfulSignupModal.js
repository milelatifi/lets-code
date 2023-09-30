import React from 'react';
import { useNavigate } from 'react-router-dom';
const SuccessfulSignupModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-500 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-4 text-white">
          Congratulations!
        </h2>
        <p className="mb-4 text-white">You have successfully signed up!</p>
        <button
          onClick={() => {
            navigate('/log-in');
          }}
          className="bg-green-900  hover:bg-green-700 text-white py-2 px-4 rounded-lg "
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSignupModal;
