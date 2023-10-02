import React, { useState } from 'react';
import '../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center items-center  pt-10 pb-11 h-screen contact ">
      <form className="w-full max-w-lg   shadow-lg rounded-lg p-6 bg-gradient-to-b from-black to-neutral-800">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-first-name"
              type="text"
              placeholder="Mile"
              onChange={handleChange}
              onSubmit={handleSubmit}
              required
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2  "
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full  text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-last-name"
              type="text"
              placeholder="Latifi"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-white text-xs font-bold mb-2 mt-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full  text-white  placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-email"
              type="email"
              placeholder="milelatifi@example.com"
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
              className="appearance-none block w-full  text-white  placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-password"
              type="password"
              placeholder="**********"
              required
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-city"
              type="text"
              placeholder="..."
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="appearance-none block w-full b-gray-100 text-white border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
                id="grid-state"
              >
                <option>Kosovo</option>
                <option>Albania</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full  text-white placeholder-neutral-500 border rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none  focus:bg-neutral-800  focus:border-gray-500 bg-neutral-900 "
              id="grid-zip"
              type="text"
              placeholder="00000"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-4"
              htmlFor="grid-help"
            >
              How can we help you?
            </label>
            <textarea
              rows="4"
              className=" appearance-none block p-2.5 w-full  text-white placeholder-neutral-500   rounded-lg border bg-neutral-900  focus:outline-none focus:bg-neutral-800  focus:border-gray-500 "
              placeholder="Please let us know how we can assist you."
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
