import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImg from "../myImages/my_Picture.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-5 my-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={myImg} alt="Sachin Dangi" rounded fluid className="profile-img" />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="display-4 fw-bold text-primary">About Me</h2>
              <p className="lead text-muted">
                Hi, I'm <strong>Sachin Dangi</strong>, a passionate <strong>MERN Stack Developer</strong> 
                with expertise in building dynamic, responsive, and scalable web applications.  
                I love creating seamless user experiences and solving complex technical challenges.
              </p>

              <p className="lead text-muted">
                With hands-on experience in <strong>React.js, Node.js, Express.js, and MongoDB</strong>, 
                I specialize in designing modern, fast, and secure web solutions. 
                Whether it's crafting intuitive UI/UX, developing robust backend APIs, or managing databases efficiently,  
                I am always eager to push my boundaries.
              </p>

              <p className="lead text-muted">
                Apart from coding, I enjoy staying updated with the latest technologies, improving website performance,  
                and exploring <strong>Cloud Computing & DevOps</strong>.  
                My goal is to build products that not only enhance digital experiences but also add value to businesses.
              </p>
              <p className="lead text-muted">
                I have completed my <strong>B.Tech in Computer Science & Engineering</strong> from  
                <strong> Truba College of Science and Technology, Bhopal</strong>. My academic journey has  
                strengthened my foundation in programming and problem-solving.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;