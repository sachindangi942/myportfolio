import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import myImage from "../myImages/myimg.png";
import TypedText from "../components/typedText/TypedText";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "./Qualification";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" }
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    },
};

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Container className="py-5">
            <Row className="text-center mb-5">
                <Col>
                    <motion.h1
                        className="fw-bold display-4"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Welcome to My Portfolio
                    </motion.h1>
                    <motion.p
                        className="fs-5 text-muted lead"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        I build amazing web applications.
                    </motion.p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col
                    md={1}
                    className="d-flex flex-column align-items-center justify-content-center gap-4 position-fixed start-0 top-50 translate-middle-y d-none d-md-flex"
                >
                    <a href="https://www.linkedin.com/in/sachin-s1a2c3hin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="#0077b5" />
                    </a>
                    <a href="https://github.com/sachindangi942" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} color="black" />
                    </a>
                    <a href="https://wa.me/8463088388" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} color="#25D366" />
                    </a>
                </Col>

                <Col md={{ span: 7, offset: 2 }} className="text-center ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        // style={{ marginTop: "-200px" }}
                    >
                        <h1 className="fw-bold">Hi, I'm Sachin Dangi</h1>
                        <TypedText />
                        <p className="text-muted lead mt-3">
                            A passionate MERN Stack Developer, building scalable & modern web applications.
                        </p>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                type="primary"
                                icon={<MailOutlined />}
                                size="large"
                                className="modern-button"
                                onClick={() => navigate("/contact")}
                            >
                                Contact Me
                            </Button>
                        </motion.div>
                    </motion.div>
                </Col>

                <Col md={3} className="text-center"
                    style={{
                        marginTop: "-150px",       // ऊपर उठाने के लिए
                        position: "relative",     // पोजिशनिंग के लिए
                        zIndex: 1,               // अन्य elements के ऊपर दिखने के लिए
                        alignSelf: "flex-start"  // Row के top से align करने के लिए
                    }}
                >
                    <Image src={myImage} fluid roundedCircle className="profile-img" />
                </Col>
            </Row>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
            >
                <motion.div variants={textVariants}><About /></motion.div>
                <motion.div variants={textVariants}><Skills /></motion.div>
                <motion.div variants={textVariants}><Qualification /></motion.div>
                <motion.div variants={textVariants}><Projects /></motion.div>
                <motion.div variants={textVariants}><Contact /></motion.div>
            </motion.div>
        </Container>
    );
};
