import React, { useState, useEffect } from 'react';
import '../App.css';
import Post from './Post';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center bg-neutral-800">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
<button>btn</button>;

export default PostsList;
