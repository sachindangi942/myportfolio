import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Contact = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds delay between children animations
      },
    },
  };

  return (
    <section id="contact" className="py-5 my-5">
      <Container>
        <h2 className="text-center fw-bold text-primary display-4 mb-4">Contact Me</h2>

        {/* Contact Details with Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="justify-content-center mb-4">
            <Col md={4} className="text-center mb-3">
              <motion.div variants={fadeInUp}>
                <FaEnvelope size={30} className="text-danger" />
                <p className="mt-2">sachindangi942@gmail.com</p>
              </motion.div>
            </Col>
            <Col md={4} className="text-center mb-3">
              <motion.div variants={fadeInUp}>
                <FaPhone size={30} className="text-success" />
                <p className="mt-2">+91 8463088388</p>
              </motion.div>
            </Col>
            <Col md={4} className="text-center mb-3">
              <motion.div variants={fadeInUp}>
                <FaMapMarkerAlt size={30} className="text-primary" />
                <p className="mt-2">Bhopal, Madhya Pradesh, India</p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Contact Form with Animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="justify-content-center">
            <Col md={8}>
              <Form className="p-4 shadow-sm bg-white rounded">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </motion.div>

        {/* Social Media Links with Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="justify-content-center mt-4">
            <Col xs={6} md={3} className="text-center">
              <motion.div variants={fadeInUp}>
                <a
                  href="https://www.linkedin.com/in/sacin-dangi-s1a2c3hin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedin size={40} className="text-primary" />
                </a>
              </motion.div>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <motion.div variants={fadeInUp}>
                <a
                  href="https://github.com/sachindangi942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaGithub size={40} className="text-dark" />
                </a>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;