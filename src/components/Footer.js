// src/components/Footer.js
import React from "react";
import "/home/mriganka/projects/up-tourism/src/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © Copyright by <u>Mriganka Shekhar Barman</u>.
      </p>
      <div className="footer-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
