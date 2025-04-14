import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
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
import { useSelector } from "react-redux";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" }
    },
};


const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, ease: "easeOut" }
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
};

export const Home = () => {
    const navigate = useNavigate();
    const {darkMode} = useSelector(state=>state.theam)

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
                <Col md={1} className="d-none d-md-flex flex-column align-items-center justify-content-center gap-4 position-fixed start-0 top-50 translate-middle-y">
                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sachin-s1a2c3hin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="#0077b5" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/sachindangi942" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className={darkMode ? "text-white" : "text-dark"} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://wa.me/8463088388" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} color="#25D366" />
                    </motion.a>
                </Col>

                <Col md={{ span: 7, offset: 2 }} className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="fw-bold">Hi, I'm Sachin Dangi</h1>
                        <TypedText />
                        <motion.p className="text-muted lead mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                            A passionate MERN Stack Developer, building scalable & modern web applications.
                        </motion.p>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                type="primary"
                                icon={<MailOutlined />}
                                size="large"
                                onClick={() => navigate("/contact")}
                            >
                                Contact Me
                            </Button>
                        </motion.div>
                    </motion.div>
                </Col>

                <Col md={3} className="text-center d-flex justify-content-center align-items-center mt-md-0 mt-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <Image src={myImage} fluid roundedCircle className="w-75" />
                    </motion.div>
                </Col>
            </Row>
            <motion.div variants={textVariants} whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}><About /></motion.div>
            <motion.div variants={textVariants} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}><Skills /></motion.div>
            <motion.div variants={textVariants} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}><Qualification /></motion.div>
            <motion.div variants={textVariants} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}><Projects /></motion.div>
            <motion.div variants={textVariants} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}><Contact /></motion.div>

        </Container>
    );
};
