import { Routes, Route } from "react-router-dom";

import ScrollToAnchor from "./components/ScrollToAnchor";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Services from "./pages/Services/Services.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Technologies from "./pages/Technologies/Technologies.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import Insights from "./pages/Insights/Insights.jsx";
import Contact from "./pages/Contact/Contact.jsx";

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

        <Route
         path="/careers" 
         element={<Careers />} />

         <Route 
          path="/insights" 
          element={<Insights />} />

          <Route
          path="/contact"
          element={<Contact />} />

      </Routes>

    </>
  );
}

export default App;