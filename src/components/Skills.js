import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaMicrosoft } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiJavascript, SiPostman, SiDocker } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={50} className="text-primary" /> },
  { name: "Redux", icon: <SiRedux size={50} className="text-purple" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-success" /> },
  { name: "Express.js", icon: <SiExpress size={50} className="text-dark" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} className="text-warning" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt size={50} className="text-danger" /> },
  { name: "GitHub", icon: <FaGithub size={50} className="text-dark" /> },
  { name: "Postman", icon: <SiPostman size={50} className="text-orange" /> },
  { name: "VS Code", icon: <FaMicrosoft size={50} className="text-primary" /> },
  { name: "AWS", icon: <FaAws size={50} className="text-warning" /> },
  { name: "Docker", icon: <SiDocker size={50} className="text-info" /> },
];

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
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
          Skills & Tools
        </motion.h2>

        {/* Skills Section */}
        <h3 className="text-center text-secondary mb-4">Technical Skills</h3>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="text-center mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 shadow-sm border-0 text-center skill-card">
                  <div>{skill.icon}</div>
                  <Card.Title className="mt-3">{skill.name}</Card.Title>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Tools Section */}
        <h3 className="text-center text-secondary mt-5 mb-4">Development Tools</h3>
        <Row className="justify-content-center">
          {tools.map((tool, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="text-center mb-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 shadow-sm border-0 text-center skill-card">
                  <div>{tool.icon}</div>
                  <Card.Title className="mt-3">{tool.name}</Card.Title>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Skills;