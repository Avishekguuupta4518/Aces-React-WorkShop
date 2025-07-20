import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [blog, setBlog] = useState({});

  async function fetchSingleBlogs() {
    try {
      const response = await axios.get(
        `https://687af359abb83744b7ee4698.mockapi.io/Blogs/${id}`
      );
      if (response.status === 200) {
        setBlog(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      alert("Error fetching blog");
    }
  }

  async function deleteBlog() {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `https://687af359abb83744b7ee4698.mockapi.io/Blogs/${id}`
      );
      if (response.status === 200)
      {
        navigate('/')
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog");
    }
  }

  useEffect(() => {
    fetchSingleBlogs();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="p-4">
        <img
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          src={blog.image}
          alt="Portrait"
        />
        <h1 className="text-3xl mt-4 font-bold">{blog.title}</h1>
        <p className="text-gray-400 mt-2">{blog.subtitle}</p>

        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={deleteBlog}
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
}

export default SinglePage;
