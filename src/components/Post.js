import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    // <div className="flex flex-row flex-wrap">
    <div className="bg-zinc-300 rounded-lg shadow border p-6 w-64 m-4">
      <h2 className="text-2xl font-bold mb-4 mt-0">{title.substr(0, 40)}</h2>
      <p className="text-gray-700 text-sm flex-grow">
        {isExpanded ? body : body.substr(0, 60)}...
      </p>
      <div className=" inline-block mt-6">
        <Link
          to={`/post/${id}`}
          className="w-32 h-px  btn bg-blue-900 hover:bg-blue-700 text-white  mt-auto "
          onClick={toggleExpansion}
        >
          See post
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Post;
