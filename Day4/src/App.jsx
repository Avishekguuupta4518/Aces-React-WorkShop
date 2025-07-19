import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Edit from "./Pages/Edit";
import SinglePage from "./Pages/SinglePage";
import About from "./Pages/About";
import Create from "./Pages/Create";
import LearningUseState from "./Pages/LearningUseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SinglePage />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/learningusestate" element={<LearningUseState />} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
