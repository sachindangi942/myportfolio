import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const projects = [
  {
    title: "E-Commerce Website",
    description: `E-Commerce Website 
A powerful and scalable full-stack e-commerce platform`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://your-restaurant-app.com",
    githubLink: "https://github.com/sachindangi942/E-com-web.git",
  },
  {
    title: "E-Commerce Website",
    description: `E-Commerce Website 
A powerful and scalable full-stack e-commerce platform`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://your-restaurant-app.com",
    githubLink: "https://github.com/sachindangi942/E-com-web.git",
  },
  {
    title: "User Registration System",
    description: "A secure user registration and authentication system with encrypted passwords",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://your-registration-app.com",
    githubLink: "https://github.com/sachindangi942/user-registration",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my skills, projects, and experience.",
    technologies: ["React.js", "Bootstrap", "CSS"],
    liveLink: "https://main.d3sbo7dtyqrczp.amplifyapp.com",
    githubLink: "https://github.com/sachindangi942/myportfolio.git",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-5 my-4">
      <Container>
        <h2 className="text-center fw-bold text-primary display-4 mb-4">My Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-4 shadow-sm border-0 text-center project-card">
                  <Card.Body>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted">{project.description}</Card.Text>
                    <div className="d-flex flex-wrap justify-content-center mb-3">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="badge bg-secondary m-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-center gap-2">
                      <Button variant="primary" href={project.liveLink} target="_blank">
                        Live Demo <FaExternalLinkAlt />
                      </Button>
                      <Button variant="dark" href={project.githubLink} target="_blank">
                        GitHub <FaGithub />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom CSS */}
      <style>
        {`
          .project-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border-radius: 15px;
          }
          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </section>
  );
};

export default Projects;