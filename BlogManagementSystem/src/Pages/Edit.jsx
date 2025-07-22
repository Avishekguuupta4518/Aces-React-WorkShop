import NavBar from "./components/NavBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const data = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function sentEditDataToBackend(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://687af359abb83744b7ee4698.mockapi.io/Blogs/" + data.id,
        {
          title: title,
          subtitle: subtitle,
          description: description,
          image: image,
        }
      );
      console.log(response);
      if (response.status === 200) {
        navigate("/single/" + data.id);
      } else {
        alert("Something went wrong, please try again later.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update blog. Please try again later.");
    }
  }

  return (
    <>
      <NavBar />
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Edit a Blog
        </h2>

        <form onSubmit={sentEditDataToBackend} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter blog title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter blog subtitle"
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter blog description"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter image URL"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Edit blog
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit;
