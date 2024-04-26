import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          CONTACT ME
        </h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <SiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="items">
            <BsLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaTwitterSquare className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <ImGithub className="icons" />
          </a>
          <a
            href="mailto:smakbor24@gmail.com"
            target="_blank"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
