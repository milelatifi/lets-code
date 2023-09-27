// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const PostDetail = () => {
//   const { id } = useParams('id');

//   const [post, setPost] = useState({});
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error('Error fetching data:', error));

//     fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
//       .then((response) => response.json())
//       .then((data) => setComments(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [id]);

//   return (
//     <div className="flex items-center justify-center h-screen bg-neutral-800">
//       <div className="bg-gradient-to-b from-neutral-900 to-transparent rounded-md outline shadow p-11  m-11">
//         <h1 className="text-3xl font-bold mb-4 mt-0 text-white ">
//           {post.title}
//         </h1>
//         <p className="text-white text-lg mb-6">{post.body}</p>
//         <Link
//           to={{ pathname: '/' }}
//           className="btn bg-green-900 hover:bg-green-700 text-white rounded-lg"
//         >
//           Go back to posts
//         </Link>
//       </div>
//       {comments.map((post) => console.log)}
//     </div>
//     // comments i shfaq qitu ner post - a po e kupton how will i fetch them? i did it for you already
//   );
// };

// export default PostDetail;
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

    // get post comments
    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="flex items-start justify-evenly h-screen bg-neutral-800">
      <div className="bg-gradient-to-b from-neutral-900 to-transparent rounded-md outline shadow p-11 m-11">
        <h1 className="text-3xl font-bold mb-4 mt-0 text-white">
          {post.title}
        </h1>
        <p className="text-white text-lg mb-6">{post.body}</p>
        <Link
          to={{ pathname: '/' }}
          className="btn bg-green-900 hover-bg-green-700 text-white rounded-lg"
        >
          Go back to posts
        </Link>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-bold text-white mb-2 mt-5">Comments:</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h3 className="text-md text-neutral-300 font-bold p-2">
                {comment.name}
              </h3>
              <p className="text-neutral-400"> {comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;
