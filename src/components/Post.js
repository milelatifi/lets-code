import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="bg-gradient-to-b from-black to-neutral-600  rounded-lg shadow p-6 w-64 m-4">
        <div className="mb-10">
          <h2 className="text-2xl text-gray-300 font-bold mb-6 ">
            {title.substr(0, 40)}
          </h2>
        </div>
        <div className="">
          <p className="text-white text-sm flex-grow ">
            {isExpanded ? body : body.substr(0, 60)}...
          </p>
        </div>
        <div className="">
          <div className=" inline-block mt-4 mb-0">
            <Link
              to={`/post/${id}`}
              className="w-32 h-px  btn bg-green-900 hover:bg-green-700 text-white rounded-md"
              onClick={toggleExpansion}
            >
              See post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
