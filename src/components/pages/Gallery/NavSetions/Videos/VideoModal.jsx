import styles from "./Styles/videoModal.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function VideoModal({ video, onClose }) {
  return (
    <div>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button className={styles.close} onClick={onClose}>
            ✖
          </button>
          <video
            src={video.src}
            controls
            autoPlay
            controlsList="nodownload"
            preload="none"
            className={styles.modalVideo}
          />
          <p className={styles.caption}>{video.title}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
