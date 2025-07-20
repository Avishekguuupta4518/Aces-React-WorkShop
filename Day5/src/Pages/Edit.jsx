function Edit() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Blog</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            className="w-full border p-2 rounded"
            placeholder="Enter subtitle"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Text</label>
          <textarea
            name="text"
            className="w-full border p-2 rounded"
            placeholder="Enter main text"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            name="image"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;
