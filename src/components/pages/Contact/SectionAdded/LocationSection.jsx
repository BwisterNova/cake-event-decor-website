import styles from "./locationSection.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <div>
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.wrapper}>
          <div className={styles.map}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.7858800334783!2d3.099322757065964!3d6.664196929537303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9f0039ab2d27%3A0xffae0a0a19ffeab!2sDe-Favour%20Global%20Cocepts%20and%20Events!5e1!3m2!1sen!2sng!4v1767337565258!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.details}>
            <p className={styles.label}>Our Location</p>
            <h2 className={styles.title}>Connecting Near and Far</h2>
            <div className={styles.address}>
              <p>
                <strong>Our Office</strong>
              </p>
              <p>Igwe Bustop</p>
              <p>Atan Ota, Ogun State</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
