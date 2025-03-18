import React from "react";
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>
      <ReactTyped
        strings={["I am a MERN Stack Developer", "I build amazing web apps", "I create modern UI/UX"]}
        typeSpeed={50}   // टाइपिंग स्पीड
        backSpeed={30}   // बैकस्पेस स्पीड
        loop             // इसे अनलिमिटेड चलाने के लिए
      />
    </div>
  );
};

export default TypedText;
