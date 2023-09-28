import '../App.css';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const users = [
    {
      name: 'John',
      surname: 'Doe',
      email: 'test@gmail.com',
      password: '123456',
      profile_picture: 'public/images/avatar-1.jpg',
    },
    {
      name: 'Pete',
      surname: 'Doe',
      email: 'user2@gmail.com',
      password: '123456',
      profile_picture:
        'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
    },
    {
      name: 'Mary',
      surname: 'Smith',
      email: 'user3@gmail.com',
      password: '123456',
      profile_picture: 'public/images/avatar-1.jpg',
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      document.querySelector('.invalid-credentials').classList.add('hidden');
      setShowSuccessModal(true);
      localStorage.setItem('logged_in', true);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      document.querySelector('.invalid-credentials').classList.remove('hidden');
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen login bg-neutral-800 ">
      <div>
        <h3 className="text-2xl  text-white mb-10 mt-0">
          Log into your account!
        </h3>
      </div>
      <form
        className="bg-gradient-to-b from-black to-neutral-800 shadow-md rounded-lg px-8 pt-6 pb-8 w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-white placeholder-neutral-500 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-4  text-white placeholder-neutral-500 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div
          className="invalid-credentials hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Failure! </strong>
          <span className="block sm:inline">Incorrect credentials.</span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className=" bg-blue-950 hover:bg-blue-900  text-white  font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Sign in
          </button>
        </div>
      </form>
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 login">
          <div className="bg-white p-8 rounded-lg shadow-lg bg-gradient-to-b from-neutral-900 to-neutral-500">
            <h2 className="text-3xl text-white font-medium mb-6">
              Congratulations!
            </h2>
            <p className="mb-6 text-white">You have successfully logged in!</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-green-900 hover:bg-green-800 text-white py-3 px-6 rounded-lg"
                onClick={handleCloseSuccessModal}
              >
                OK
              </button>
              <button
                className="bg-blue-950 hover:bg-blue-900 text-white py-3 px-6 rounded-lg"
                onClick={() => {
                  window.location.href = '/profile';
                }}
              >
                PROFILE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginPage;
