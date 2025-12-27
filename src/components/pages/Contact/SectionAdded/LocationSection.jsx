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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.85819545006!2d3.099160022308955!3d6.664489313362343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzknNTEuMyJOIDPCsDA1JzU3LjEiRQ!5e0!3m2!1sen!2sng!4v1753460797954!5m2!1sen!2sng"
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
