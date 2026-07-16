import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Services from "./pages/Services/Services.jsx";
import Industries from "./pages/Industries/Industries.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/industries" element={<Industries />} />
    </Routes>
  );
}

export default App;