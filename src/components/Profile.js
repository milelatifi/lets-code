import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // qitu e lexojm userin prej localStorage edhe e kthejm prej JSON n objekt
  // te login ke objekt e kthym json qe me rujt
  const user = JSON.parse(localStorage.getItem('user'));
  // tash qitu e ki profile_picture
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-700">
      <div className="bg-white shadow-md rounded p-8 w-800">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div className="mb-4">
          <img
            src={user.profile_picture}
            className="
            border-4
            w-1/2
            rounded-full  
            my-4
            md:w-4/12   
            md:p-4
        "
          />
        </div>
        <div className="mb-4">
          <p>
            <strong>Full Name:</strong> {user.name} {user.surname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          {/* <button
            className="bg-black text-white py-2 px-4 rounded-lg"
            onClick={() => {}}
          >
            Back
          </button> */}
          <Link
            to={{ pathname: '/' }}
            className="btn bg-black hover:bg-neutral-900 text-white"
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
