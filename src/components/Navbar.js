import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "./NavbarComponent.css"

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

function HeaderNav() {
  const location = useLocation();

  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible">
      <Navbar fixed="top" expand="lg" className="mb-4  p-3 bg-light ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
            <Nav className="me-auto align-items-start">
              <motion.div whileHover="hover" variants={linkVariants}>
                <Nav.Link as={Link} to="/" className="text-dark fw-bold fs-5">
                  My Portfolio
                </Nav.Link>
              </motion.div>
            </Nav>
            <Nav className="ms-auto">
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
                    className={location.pathname === navItem.path ? "fw-bold text-primary" : "text-dark"}
                  >
                    {navItem.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}

export default HeaderNav;