import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import React Bootstrap components
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useNavigate } from "react-router-dom"; // For navigation
import { FaHome } from "react-icons/fa"; // Home icon

const NotFound = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adds delay between children animations
      },
    },
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="text-center">
        <Col>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 404 Heading */}
            <motion.h1 variants={fadeInUp} className="display-1 fw-bold text-danger">
              404
            </motion.h1>

            {/* Not Found Message */}
            <motion.h2 variants={fadeInUp} className="display-4 mb-3">
              Oops! Page Not Found
            </motion.h2>

            {/* Back to Home Button */}
            <motion.div variants={fadeInUp}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/")} // Navigate to home page
                className="mt-3"
              >
                <FaHome className="me-2" /> Go Back Home
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;