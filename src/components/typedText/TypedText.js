import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const TypedText = () => {
  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "20px", overflow: "hidden" }}>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ReactTyped
          strings={[
            "I am a MERN Stack Developer",
            "I build amazing web apps",
            "I create modern UI/UX"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.div>
    </div>
  );
};

export default TypedText;
