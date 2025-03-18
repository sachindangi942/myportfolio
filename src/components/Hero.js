import React from "react";
import { Button } from "antd";

const Hero = () => {
  return (
    <section style={{ textAlign: "center", padding: "50px 20px" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Welcome to My Portfolio
      </h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        I build amazing web applications.
      </p>
      <Button type="primary" size="large">
        View My Work
      </Button>
    </section>
  );
};

export default Hero;