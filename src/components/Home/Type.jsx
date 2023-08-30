import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Front End Engineer",
              "Passionate Design And IT Education",
              "Produce App For Handicapped",
              "Was Born In 2008"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,
          }}
        />
      )
}

export default Type