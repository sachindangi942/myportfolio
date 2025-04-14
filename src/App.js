// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavbarComponent from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import "./App.css";
// import { Home } from "./pages/Home";
// import Qualification from "./pages/Qualification";
// import NotFound from "./pages/NotFound";
// import { useSelector } from "react-redux";


// function App() {
//   const darkMode = useSelector(state => state.theam.darkMode)
//   return (
//     <div className={darkMode ? "dark-mode" : "light-mode"}>
//       <BrowserRouter>
//         <NavbarComponent />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/qualification" element={<Qualification />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;















import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { Home } from "./pages/Home";
import Qualification from "./pages/Qualification";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.theam.darkMode);

  // Body par class apply karo
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
