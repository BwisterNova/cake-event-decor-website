import styles from "./galleryShowCase.module.css";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "../../../../common/OptimizedImage";

const showCase1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704181/showCase1_cpo0ob.jpg";
const showCase2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704207/showCase2_zevgsx.jpg";
const showCase3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704218/showCase3_bx6t4s.jpg";
const showCase4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704182/showCase4_q7wp2o.jpg";
const milkyDonut =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704180/MilkyDonut_wnukoy.jpg";
const showCase6 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704192/showCase6_nxodza.jpg";
const yellowDecoration =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704163/yellowBlueDecor_ius5ws.jpg";
const smallChops =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704213/smallChops_mcbxvt.png";

const galleryImages = [
  {
    id: 1,
    src: showCase1,
    alt: "Exotic Cake",
  },
  {
    id: 2,
    src: showCase2,
    alt: "Wedding Decoration",
  },
  {
    id: 3,
    src: showCase3,
    alt: "Birthday Cake",
  },
  {
    id: 4,
    src: showCase4,
    alt: "Shawama",
  },

  {
    id: 5,
    src: milkyDonut,
    alt: "Milky Donut",
  },

  {
    id: 6,
    src: showCase6,
    alt: "Event Decoration",
  },

  {
    id: 7,
    src: yellowDecoration,
    alt: "Yellow blue decoration",
  },

  {
    id: 8,
    src: smallChops,
    alt: "Small Chops",
  },
];

export default function GalleryShowCase() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <section className={styles.galleryTeaser}>
        <h2 className={styles.heading}>A Glimpse of Our Work</h2>
        <p className={styles.subtext}>
          From exotic cakes, sweet treats to elegant event designs, here’s a
          peek at what we do best.
        </p>

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.imageWrapper}>
              <motion.div
                className={styles.image}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image.src)}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  widths={[200, 300, 400]}
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
                  className={styles.image}
                />
              </motion.div>
            </div>
          ))}
        </div>

        <a href="/gallery" className={styles.viewMoreBtn}>
          View Full Gallery
        </a>
      </section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <OptimizedImage
                src={selectedImage}
                alt="Cake full view"
                className={styles.modalImage}
                widths={[600, 800, 1200]}
                sizes="(max-width: 768px) 600px, (max-width: 1200px) 800px, 1200px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
