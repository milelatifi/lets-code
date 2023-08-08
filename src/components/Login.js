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
    // here na e qesim qet user si json n local storage me key user
    // tash te profile
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
    <div className="flex items-center justify-center h-screen  bg-neutral-700">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-black hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Sign in
          </button>
        </div>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">You have successfully logged in!</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-black text-white py-2 px-4 rounded-lg"
                onClick={handleCloseSuccessModal}
              >
                OK
              </button>
              <button
                className=" bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
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
