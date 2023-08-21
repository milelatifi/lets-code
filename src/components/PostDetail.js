import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams('id');

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-800">
      <div className="bg-gradient-to-b from-black to-neutral-600 rounded-lg shadow  p-10  m-10">
        <h1 className="text-3xl font-bold mb-4 mt-0 text-white ">
          {post.title}
        </h1>
        <p className="text-white text-md mb-6">{post.body}</p>
        <Link
          to={{ pathname: '/' }}
          className="btn bg-green-900 hover:bg-green-700 text-white rounded-lg"
        >
          Go back to posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
