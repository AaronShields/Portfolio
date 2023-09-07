import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CSBA @ USC💻",
          "Oracle Intern - Health and AI (2023)",
          "Oracle Intern - Global Business Unit (2022)",
          "SCOPE SC",
          "National Scoiety of Black Engineers",
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
