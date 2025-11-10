import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./styles/contact.css";

export function Contact() {
  const form = useRef();



  return (
    <div className="contact-section">
      <h1>Contact Me</h1>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <p>
            I’m <span>Swetha CT</span>, a passionate fresher Python Full-Stack Developer 
            who loves crafting responsive web applications. I’m eager to learn new technologies 
            and build creative, real-world projects.
          </p>

          <div className="info-details">
            <p><strong> Location:</strong> chennai, Tamil Nadu, India</p>
            <p><strong> Email:</strong> <a href="mailto:swetha.pythondevp@gmail.com">swetha.pythondevp@gmail.com</a></p>
            <p><strong>Phone:</strong> +91 9514436809</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form  className="contact-form" action="https://formsubmit.co/swetha.pythondevp@gmail.com"method="POST" >
          <input type="text"  placeholder="Your Name" name="user_name" required/>
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}


