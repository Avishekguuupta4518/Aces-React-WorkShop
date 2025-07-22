import { Link } from "react-router-dom";

function Card({ blog }) {
  return (
    <div className="max-w-sm mb-6 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg flex flex-col">
      <Link to={"/single/" + blog.id} className="flex flex-col h-full">
        <img
          src={blog.image}
          className="w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg object-cover h-48"
          alt="Laravel 9 Release"
        />
        <div className="flex items-center mb-3">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500">
            News
          </span>
          <p className="font-mono text-xs font-normal opacity-75 text-black">
            {blog.createdAt}
          </p>
        </div>
        <p className="font-display text-2xl font-bold leading-tight text-black line-clamp-2">
          {blog.title}
        </p>
        <span className="text-gray-600 mt-2 line-clamp-3">{blog.subtitle}</span>
      </Link>
    </div>
  );
}

export default Card;
