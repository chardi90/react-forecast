import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      Coded by
      <a href="https://github.com/chardi90" target="_blank" rel="noreferrer">
        {" "}
        Clare Harding
      </a>
      , open-sourced on
      <a
        href="https://github.com/chardi90/weather"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub
      </a>
      , and
      <a
        href="https://the-weather-in.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        hosted on Netlify
      </a>
      .
    </footer>
  );
}
