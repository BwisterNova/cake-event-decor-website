import styles from "./contact.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LocationSection from "./SectionAdded/LocationSection";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoWhatsapp,
  BiPhone,
} from "react-icons/bi";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  //For reciving mails
  const [status, setStatus] = useState(" ");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xzzvavrg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <Helmet>
        <title>Contact Us - DE-Favour Cakes & Events</title>
        <meta
          name="description"
          content="Get in touch with DE-Favour for inquiries about cakes, event decorations, and services. Contact us today!"
        />
      </Helmet>
      <main className={styles.main}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.subtitle}>
              We are here to help you with any questions or concerns you may
              have. Please fill out the form below, and we will get back to you
              as soon as possible.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.infoSection}>
              <h3>Contact Information</h3>
              <p>
                Have a question, booking, or just want to say hello? We'd love
                to hear from you.
              </p>
              <ul className={styles.contactList}>
                <li>
                  <BiPhone /> +2348034370838,+2348029915193
                </li>
                {/* <li>
                  <BiLogoWhatsapp />
                </li> */}
                <li>
                  <BiEnvelope /> arubuola.yemi@gmail.com
                </li>
                <li>
                  <BiCurrentLocation /> Igwe Bustop, Atan-ota, Ogun State.
                </li>
              </ul>
            </div>

            <form className={styles.formSection} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Lane Victor"
                    name="name"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Your Email</label>
                  <input
                    type="email"
                    placeholder="hello@mail.com"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Your Subject</label>
                <input
                  type="text"
                  placeholder="I want..."
                  name="subject"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.messageLabel}>Message</label>
                <textarea
                  placeholder="Write your message here..."
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {status === "sending" && (
                <p className={styles.sending}>Sending...</p>
              )}
              {status === "success" && (
                <p className={styles.success}>Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className={styles.error}>
                  Failed to send Message. please try again.
                </p>
              )}
            </form>
          </div>
        </motion.div>
        {/* Location Section */}
        <LocationSection />
      </main>
    </div>
  );
}
