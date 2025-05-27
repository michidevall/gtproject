import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
 // Ensure you have a CSS file for styling

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovgydmk",    // Replace with your actual EmailJS values
        "template_mbq18p6",
        form.current,
        "ev_hmt0SszrIJbe-T"
      )
      .then(
        () => {
          alert("Message sent!");
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
      <label>Name:</label>
      <input type="text" name="user_name" required />

      <label>Email:</label>
      <input type="email" name="user_email" required />

      <label>Phone Number:</label>
      <input type="phone" name="user_phone" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
