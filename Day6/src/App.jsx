import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Edit from "./Pages/Edit";
import SinglePage from "./Pages/SinglePage";
import Create from "./Pages/Create";
import LearningUseState from "./Pages/LearningUseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/learning-usestate" element={<LearningUseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
