import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function SinglePage() {
  const data = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  async function fetchSingleBlogs() {
    const response = await axios.get(
      "https://687af359abb83744b7ee4698.mockapi.io/Blogs/" + data.id
    );
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      alert("Error fetching blog");
    }
  }

  useEffect(() => {
    fetchSingleBlogs();
  }, []);

  async function deleteBlog() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        "https://687af359abb83744b7ee4698.mockapi.io/Blogs/" + data.id
      );
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Error deleting blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Something went wrong while deleting the blog.");
    }
  }

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
        <Link to={"/edit/" + blog.id}>
          <button className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Edit Blog
          </button>
        </Link>
        <button
          className="mt-4 ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={deleteBlog}
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
}

export default SinglePage;
