const Single = ({blog}) => {
  return (
    <div className="w-screen min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <section id="about" className="p-6 text-center max-w-md">
        <img
          className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
          src={blog.image}
          alt="Portrait"
        />
        <h1 className="text-3xl mt-4 font-bold">{blog.title}</h1>
        <p className="text-gray-400 mt-2">
          {blog.subtitle}
        </p>
      </section>
    </div>
  );
};

export default Single;
