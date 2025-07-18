import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Edit from "./Pages/Edit";
import Blog from "./Pages/Blog";
import Create from "./Pages/Create";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
