// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion"; 

// const Contact = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, 
//       },
//     },
//   };

//   return (
//     <section id="contact" className="py-5 my-5">
//       <Container>
//         <h2 className="text-center fw-bold text-primary display-4 mb-4">Contact Me</h2>

//         {/* Contact Details with Animation */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <Row className="justify-content-center mb-4">
//             <Col md={4} className="text-center mb-3">
//               <motion.div variants={fadeInUp}>
//                 <FaEnvelope size={30} className="text-danger" />
//                 <p className="mt-2">sachindangi942@gmail.com</p>
//               </motion.div>
//             </Col>
//             <Col md={4} className="text-center mb-3">
//               <motion.div variants={fadeInUp}>
//                 <FaPhone size={30} className="text-success" />
//                 <p className="mt-2">+91 8463088388</p>
//               </motion.div>
//             </Col>
//             <Col md={4} className="text-center mb-3">
//               <motion.div variants={fadeInUp}>
//                 <FaMapMarkerAlt size={30} className="text-primary" />
//                 <p className="mt-2">Bhopal, Madhya Pradesh, India</p>
//               </motion.div>
//             </Col>
//           </Row>
//         </motion.div>

//         {/* Contact Form with Animation */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <Row className="justify-content-center">
//             <Col md={8}>
//               <Form className="p-4 shadow-sm bg-white rounded">
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter your name" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" placeholder="Enter your email" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control as="textarea" rows={4} placeholder="Your message" required />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="w-100">
//                   Send Message
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </motion.div>

//         {/* Social Media Links with Animation */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <Row className="justify-content-center mt-4">
//             <Col xs={6} md={3} className="text-center">
//               <motion.div variants={fadeInUp}>
//                 <a
//                   href="https://www.linkedin.com/in/sacin-dangi-s1a2c3hin"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-dark"
//                 >
//                   <FaLinkedin size={40} className="text-primary" />
//                 </a>
//               </motion.div>
//             </Col>
//             <Col xs={6} md={3} className="text-center">
//               <motion.div variants={fadeInUp}>
//                 <a
//                   href="https://github.com/sachindangi942"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-dark"
//                 >
//                   <FaGithub size={40} className="text-dark" />
//                 </a>
//               </motion.div>
//             </Col>
//           </Row>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };

// export default Contact;













import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values: ", values);
    // Axios ya fetch se backend ko bhejo
  };

  return (
    <div id="contact" className="py-5 my-5 container">
      <h2 className="text-center text-primary fw-bold display-4 mb-4">Contact Me</h2>

      <Row justify="center" gutter={[16, 16]} className="mb-4">
        <Col xs={24} md={8} className="text-center">
          <MailOutlined style={{ fontSize: "24px", color: "red" }} />
          <p className="mt-2">sachindangi942@gmail.com</p>
        </Col>
        <Col xs={24} md={8} className="text-center">
          <PhoneOutlined style={{ fontSize: "24px", color: "green" }} />
          <p className="mt-2">+91 8463088388</p>
        </Col>
        <Col xs={24} md={8} className="text-center">
          <EnvironmentOutlined style={{ fontSize: "24px", color: "blue" }} />
          <p className="mt-2">Bhopal, Madhya Pradesh, India</p>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} md={12}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="p-4 bg-white rounded shadow-sm"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row justify="center" className="mt-4" gutter={32}>
        <Col>
          <a href="https://www.linkedin.com/in/sacin-dangi-s1a2c3hin" target="_blank" rel="noreferrer">
            <LinkedinOutlined style={{ fontSize: "32px", color: "#0077b5" }} />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/sachindangi942" target="_blank" rel="noreferrer">
            <GithubOutlined style={{ fontSize: "32px", color: "#000" }} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
