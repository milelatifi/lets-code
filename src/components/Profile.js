import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-800 ">
      <div className="bg-gradient-to-b from-neutral-700 to-neutral-500  shadow-md rounded-lg p-8 w-800">
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
            alt=""
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
          <Link
            to={{ pathname: '/' }}
            className="btn p-3 pl-6 pr-6 m-0 bg-blue-950 hover:bg-blue-900 text-white font-medium rounded-lg  "
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
