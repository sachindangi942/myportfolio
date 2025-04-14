// // import React from "react";
// // import { motion } from "framer-motion";
// // import Container from "react-bootstrap/Container";
// // import Navbar from "react-bootstrap/Navbar";
// // import Nav from "react-bootstrap/Nav";
// // import { Link, useLocation } from "react-router-dom";
// // import "./NavbarComponent.css"

// // const navVariants = {
// //   hidden: { opacity: 0, y: -20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // };

// // const linkVariants = {
// //   hover: { scale: 1.1, transition: { duration: 0.3 } },
// // };

// // function HeaderNav() {
// //   const location = useLocation();

// //   return (
// //     <motion.nav variants={navVariants} initial="hidden" animate="visible">
// //       <Navbar fixed="top" expand="lg" className="mb-4  p-3 bg-light ">
// //         <Container>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
// //           <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
// //             <Nav className="me-auto align-items-start">
// //               <motion.div whileHover="hover" variants={linkVariants}>
// //                 <Nav.Link as={Link} to="/" className="text-dark fw-bold fs-5">
// //                   My Portfolio
// //                 </Nav.Link>
// //               </motion.div>
// //             </Nav>
// //             <Nav className="ms-auto">
// //               {[
// //                 { path: "/", label: "Home" },
// //                 { path: "/about", label: "About Me" },
// //                 { path: "/skills", label: "Skills" },
// //                 { path: "/qualification", label: "Qualifications" },
// //                 { path: "/projects", label: "Projects" },
// //                 { path: "/contact", label: "Contact Me" },
// //               ].map((navItem, index) => (
// //                 <motion.div key={index} whileHover="hover" variants={linkVariants}>
// //                   <Nav.Link
// //                     as={Link}
// //                     to={navItem.path}
// //                     className={location.pathname === navItem.path ? "fw-bold text-primary" : "text-dark"}
// //                   >
// //                     {navItem.label}
// //                   </Nav.Link>
// //                 </motion.div>
// //               ))}
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>
// //     </motion.nav>
// //   );
// // }

// // export default HeaderNav;


// import React from "react";
// import { motion } from "framer-motion";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";
// import "./NavbarComponent.css";
// import { theamToggle } from "../redux/fetures/TheamSlice";
// import { FaMoon, FaSun } from "react-icons/fa";

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const linkVariants = {
//   hover: { scale: 1.1, transition: { duration: 0.3 } },
// };

// function HeaderNav() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.theam.darkMode);

//   return (
//     <motion.nav variants={navVariants} initial="hidden" animate="visible">
//       <Navbar
//         fixed="top"
//         expand="lg"
//         className={`mb-4 p-3 ${darkMode ? "bg-dark" : "bg-light"}`}
//         variant={darkMode ? "dark" : "light"}
//       >
//         <Container>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
//           <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
//             <Nav className="me-auto align-items-start">
//               <motion.div whileHover="hover" variants={linkVariants}>
//                 <Nav.Link
//                   as={Link}
//                   to="/"
//                   className={`fw-bold fs-5 ${darkMode ? "text-light" : "text-dark"}`}
//                 >
//                   My Portfolio
//                 </Nav.Link>
//               </motion.div>
//             </Nav>
//             <Nav className="ms-auto align-items-center">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/about", label: "About Me" },
//                 { path: "/skills", label: "Skills" },
//                 { path: "/qualification", label: "Qualifications" },
//                 { path: "/projects", label: "Projects" },
//                 { path: "/contact", label: "Contact Me" },
//               ].map((navItem, index) => (
//                 <motion.div key={index} whileHover="hover" variants={linkVariants}>
//                   <Nav.Link
//                     as={Link}
//                     to={navItem.path}
//                     className={
//                       location.pathname === navItem.path
//                         ? "fw-bold text-primary"
//                         : darkMode
//                           ? "text-light"
//                           : "text-dark"
//                     }
//                   >
//                     {navItem.label}
//                   </Nav.Link>
//                 </motion.div>
//               ))}
//             </Nav>
//             <Nav className="ms-auto align-items-center">
//               <span
//                 onClick={() => dispatch(theamToggle())}
//                 style={{ cursor: "pointer", fontSize: "1.5rem" }}
//                 title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//               >
//                 {darkMode ? <FaSun color="#f39c12" /> : <FaMoon color="#2c3e50" />}
//               </span>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </motion.nav>
//   );
// }

// export default HeaderNav;






import React from "react";
import "./NavbarComponent.css"
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { theamToggle } from "../redux/fetures/TheamSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hover: { scale: 1.2, transition: { duration: 0.6 } },
};

function HeaderNav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theam.darkMode);

  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible">
      <Navbar
        fixed="top"
        expand="lg"
        className={`mb-4 p-3 ${darkMode ? "bg-dark" : "bg-light"}`}
        variant={darkMode ? "dark" : "light"}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={darkMode ? "border-0 text-light" : "border-0 text-dark"}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`justify-content-start ${darkMode ? "bg-dark" : "bg-light"}`}
          >
            {/* Brand */}
            <Nav className="me-auto align-items-start gap-5 ">
              <motion.div whileHover="hover" variants={linkVariants}>
                <Nav.Link
                  as={Link}
                  to="/"
                  className={`fw-bold fs-5 ${darkMode ? "text-light" : "text-dark"}`}
                >
                  My Portfolio
                </Nav.Link>
              </motion.div>
            </Nav>

            {/* Nav Items */}
            <Nav className="ms-auto  gap-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Me" },
                { path: "/skills", label: "Skills" },
                { path: "/qualification", label: "Qualifications" },
                { path: "/projects", label: "Projects" },
                { path: "/contact", label: "Contact Me" },
              ].map((navItem, index) => (
                <motion.div key={index} whileHover="hover" variants={linkVariants}>
                  <Nav.Link
                    as={Link}
                    to={navItem.path}
                    className={`${location.pathname === navItem.path
                        ? "fw-bold text-primary"
                        : darkMode
                          ? "text-light"
                          : "text-dark"
                      }`}
                  >
                    {navItem.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>

            {/* Dark Mode Toggle Button */}
            <Nav className="ms-auto align-items-center">
              <motion.div whileHover="hover" variants={linkVariants} >
                <span
                  onClick={() => dispatch(theamToggle())}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? <FaSun color="#f39c12" /> : <FaMoon color="#2c3e50" />}
                </span>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}

export default HeaderNav;
