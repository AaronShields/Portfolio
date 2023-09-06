import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CSBA @ USC💻",
          "Oracle Intern - Health and AI",
          "Kappa Alpha Psi Fraternity, Inc.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
