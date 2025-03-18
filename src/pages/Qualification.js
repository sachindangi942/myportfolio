import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const qualifications = [
  {
    title: "High School (10th)",
    institution: "Maharana Pratap Convent H S School ahmadpur sehore",
    year: "2013 - 2020",
    icon: <FaSchool size={50} className="text-primary" />,
  },
  {
    title: "Higher Secondary (12th)",
    institution: "Maharana Pratap Convent H S School ahmadpur sehore",
    year: "2013 - 2020",
    icon: <FaSchool size={50} className="text-success" />,
  },
  {
    title: "B.Tech in CSE",
    institution: "Truba College of Science and Technology, Bhopal",
    year: "2020 - 2024",
    icon: <FaUniversity size={50} className="text-warning" />,
  },
  {
    title: "Internship (MERN Stack)",
    institution: "Vanjain Technology, Bhopal",
    year: "6 Months (2024 - 2025)",
    icon: <FaGraduationCap size={50} className="text-danger" />,
  },
];

const Qualification = () => {
  return (
    <motion.section 
      id="qualification" 
      className="py-5 my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <motion.h2 
          className="text-center fw-bold text-primary display-4 mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Qualifications
        </motion.h2>
        <Row className="justify-content-center">
          {qualifications.map((qualification, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-4 shadow-sm border-0 text-center qualification-card">
                  <div>{qualification.icon}</div>
                  <Card.Title className="mt-3">{qualification.title}</Card.Title>
                  <Card.Subtitle className="text-muted">{qualification.institution}</Card.Subtitle>
                  <Card.Text className="mt-2">{qualification.year}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Qualification;
