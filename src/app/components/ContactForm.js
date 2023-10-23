"use client";
import { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handlesubmit = (e) => {};

  return (
    <form className={styles.contact_form} onSubmit={handlesubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter Your Name :
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Name  "
            className={mulish.className}
            onChange={handleChange}
            value={user.username}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email :
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enter Your Email  "
            className={mulish.className}
            onChange={handleChange}
            value={user.email}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone :
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone "
            className={mulish.className}
            onChange={handleChange}
            value={user.phone}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message :
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message  "
            rows={5}
            className={mulish.className}
            style={{ resize: "none" }}
            onChange={handleChange}
            value={user.message}
            required
          />
        </label>
      </div>

      <div>
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
