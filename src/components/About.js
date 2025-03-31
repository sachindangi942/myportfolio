import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImg from "../myImages/my_Picture.jpg";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.5, ease: "easeInOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-5 my-5 position-relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} className="text-center mb-4">
            <motion.h2
              className="display-4 fw-bold text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
          </Col>
          <Col md={5} className="text-center mb-4 mb-md-0 order-md-1">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Image
                src={myImg}
                alt="Sachin Dangi"
                roundedCircle
                fluid
                className="profile-img shadow-lg"
                style={{ width: "45%" }}
              />
            </motion.div>
          </Col>
          <Col md={7} className="order-md-2">
            <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="lead text-muted">
                Hi, I'm <strong>Sachin Dangi</strong>, a passionate <strong>MERN Stack Developer</strong>
                with expertise in building dynamic, responsive, and scalable web applications.
              </p>
              <p className="lead text-muted">
                With hands-on experience in <strong>React.js, Node.js, Express.js, and MongoDB</strong>,
                I specialize in designing modern, fast, and secure web solutions.
              </p>
              <p className="lead text-muted">
                Apart from coding, I enjoy exploring <strong>Cloud Computing & DevOps</strong>,
                and optimizing website performance.
              </p>
              <p className="lead text-muted">
                I have completed my <strong>B.Tech in Computer Science & Engineering</strong>
                from <strong>Truba College of Science and Technology, Bhopal</strong>.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;
