import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostsList from './PostList';

const PostDetail = () => {
  const { id } = useParams('id');

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-800">
      <div className="bg-zinc-300 rounded-lg shadow border p-6  m-4">
        <h1 className="text-2xl font-bold mb-4 mt-0">{post.title}</h1>
        <p className="text-gray-700 text-sm mb-6">{post.body}</p>
        <Link
          to={{ pathname: '/' }}
          className="btn bg-blue-900 hover:bg-blue-700 text-white"
        >
          Go back to posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
