function Edit() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Edit Blog</h2>

      <form className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Update title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Update subtitle"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Update description"
            rows="1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Main Text</label>
          <textarea
            name="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Update main text"
            rows="2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Change Image</label>
          <input
            type="file"
            name="image"
            className="w-full text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default Edit;
