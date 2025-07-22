import { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try {
      const response = await axios.get(
        "https://687af359abb83744b7ee4698.mockapi.io/Blogs"
      );
      console.log(response);
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        alert("Error fetching blogs.");
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      alert("Something went wrong while fetching blogs.");
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs, "This is blogs");

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap gap-5 mt-2 p-2 justify-center">
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
