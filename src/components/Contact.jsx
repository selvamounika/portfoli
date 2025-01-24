import React from "react";

function Contact() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #001f3f, #4ca1af)",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const contactListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    fontSize: "18px",
    lineHeight: "2.5",
  };

  const linkStyle = {
    color: "#32CD32",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#FFDD57",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Get in Touch</h1>
      <ul style={contactListStyle}>
        <li>
          <span role="img" aria-label="phone">📞</span> Phone: 
          <a href="tel:+1234567890" style={linkStyle}>7539964915</a>
        </li>
        <li>
          <span role="img" aria-label="email">📧</span> Email: 
          <a href="mailto:your.email@gmail.com" style={linkStyle}>ksmounika84@gmail.com</a>
        </li>
        <li>
          <span role="img" aria-label="linkedin">🔗</span> LinkedIn: 
          <a href="https://www.linkedin.com/in/selvamounika-k-018ab1283/ "style={linkStyle} target="_blank" rel="noopener noreferrer">
          https://github.com/selvamounika
          </a>
        </li>
        <li>
          <span role="img" aria-label="github">💻</span> GitHub: 
          <a href="https://github.com/selvamounika" style={linkStyle} target="_blank" rel="noopener noreferrer">
          https://github.com/selvamounika
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
