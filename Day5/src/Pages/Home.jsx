import { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af359abb83744b7ee4698.mockapi.io/Blogs"
    );
    console.log(response);
    if (response.status == 200) {
      setBlogs(response.data);
    } else {
      alert("Error");
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
        {blogs.map(function (blog) {
          return <Card key={blog.id} blog={blog} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
