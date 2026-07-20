import { Routes, Route } from "react-router-dom";

import ScrollToAnchor from "./components/ScrollToAnchor";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Services from "./pages/Services/Services.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Technologies from "./pages/Technologies/Technologies.jsx";

function App() {

  return (
    <>

      <ScrollToAnchor />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/technologies"
          element={<Technologies />}
        />

      </Routes>

    </>
  );
}

export default App;