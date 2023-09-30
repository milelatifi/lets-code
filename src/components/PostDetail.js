import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams('id');

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));

    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className=" post-details flex justify-center items-center bg-neutral-800 h-screen">
      <div className="bg-gradient-to-b from-black to-neutral-600 rounded-lg shadow p-11 pt-10 m-4">
        <h1 className="text-3xl font-bold mb-4 mt-0 text-white">
          {post.title}
        </h1>
        <p className="text-white text-lg mb-6">{post.body}</p>
        <Link
          to={{ pathname: '/' }}
          className="btn p-4 m-0 bg-blue-950 hover:bg-blue-900 text-white font-medium rounded-lg"
        >
          Go back to posts
        </Link>
      </div>
      <div className="m-10 mt-2">
        <h2 className="text-md font-bold text-white  mt-5">Comments:</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h3 className="text-md text-neutral-200 font-medium p-4">
                {comment.name}
              </h3>
              <p className="text-neutral-400 text-sm"> {comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;
