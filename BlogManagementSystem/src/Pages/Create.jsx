import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function Create() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  async function sentDataToBackend(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://687af359abb83744b7ee4698.mockapi.io/Blogs",
        {
          title: title,
          subtitle: subtitle,
          description: description,
          image: image,
        }
      );
      console.log(response);
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong, please try again later.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Failed to publish blog. Please check your connection.");
    }
  }

  return (
    <>
      <NavBar />
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Create a New Blog
        </h2>

        <form onSubmit={sentDataToBackend} className="space-y-5">
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
              placeholder="Short description of the blog"
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload Image Url
            </label>
            <textarea
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the image url"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
