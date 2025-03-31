import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import {  Menu } from "antd";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-dark text-white py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="mb-3">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h5>Connect with Me</h5>
              <div className="d-flex justify-content-center gap-4">
                {[{
                  link: "https://www.linkedin.com/in/sacin-dangi-s1a2c3hin",
                  icon: <FaLinkedin size={30} />
                },
                {
                  link: "https://github.com/sachindangi942",
                  icon: <FaGithub size={30} />
                },
                {
                  link: "mailto:sachindangi942@gmail.com",
                  icon: <FaEnvelope size={30} />
                }].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    whileHover={{ scale: 1.2, color: "#f8f9fa" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col xs={12} md={6} className="mb-3">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h5>Quick Links</h5>
              <Menu theme="dark" mode="horizontal" selectable={false} className="justify-content-center">
                {["Home", "About", "Projects", "Contact"].map((item, index) => (
                  <Menu.Item key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-white">
                      {item}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </motion.div>
          </Col>

          <Col xs={12} className="mt-3">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
