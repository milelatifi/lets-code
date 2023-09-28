import '../App.css';
import React, { useState } from 'react';
import SuccessfulSignupModal from './SuccessfulSignupModal';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessfulSignupModal, setShowSuccessfulSignupModal] =
    useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', {
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    });
    setShowSuccessfulSignupModal(true);
  };

  const handleSuccessfulSignupModalClose = () => {
    setShowSuccessfulSignupModal(false);
  };

  return (
    <div className="flex justify-center items-center  pt-10 pb-16 signup bg-neutral-800">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl  text-white mb-10 mt-10">
          Register so you can be a part of us!
        </div>
        <form
          className="w-full max-w-lg shadow-lg rounded-lg p-6 bg-gradient-to-b from-black to-neutral-800 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full text-white  placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-white-500 bg-neutral-900"
                id="grid-first-name"
                type="text"
                placeholder="Mile"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Surname
              </label>
              <input
                className="appearance-none block w-full  text-white placeholder-neutral-500  border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900"
                id="grid-last-name"
                type="text"
                placeholder="Latifi"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2 mt-2"
                htmlFor="grid-date-of-birth"
              >
                Date of Birth
              </label>
              <input
                className="appearance-none block w-full text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900"
                id="grid-date-of-birth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full  text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900"
                id="grid-email"
                type="email"
                placeholder="milelatifi@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900"
                id="grid-password"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white  font-medium py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {showSuccessfulSignupModal && (
        <SuccessfulSignupModal onClose={handleSuccessfulSignupModalClose} />
      )}
    </div>
  );
};

export default SignupForm;
