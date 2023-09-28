import { Link } from 'react-router-dom';

const Post = ({ id, title, body }) => {
  return (
    <div
      className="
                relative
                flex w-full max-w-[22rem] flex-col rounded-xl
                bg-clip-border  shadow-lg m-2
                bg-gradient-to-b from-black to-neutral-600 text-white
             "
    >
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-white antialiased">
            {title.slice(0, 16)}
          </h5>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-300 antialiased">
          {body.slice(0, 60)}...
        </p>
      </div>
      <div className="relative mt-5 p-2">
        <Link
          to={`/post/${id}`}
          className="
                    absolute bottom-0 right-0 m-3 btn p-2 bg-blue-950 hover:bg-blue-900  font-medium rounded-md  
                    "
        >
          See post
        </Link>
      </div>
    </div>
  );
};

export default Post;
