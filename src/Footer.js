import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Coded by{" "}
        <a
          href="https://chardi-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Clare Harding
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/chardi90/react-forecast"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and{" "}
        <a
          href="https://forecast-on-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </div>
  );
}
