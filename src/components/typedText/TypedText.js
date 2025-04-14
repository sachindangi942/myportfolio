import React from "react";
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
      <ReactTyped
        strings={["I am a MERN Stack Developer", "I build amazing web apps", "I create modern UI/UX"]}
        typeSpeed={50}   
        backSpeed={30} 
        loop            
      />
    </div>
  );
};

export default TypedText;
