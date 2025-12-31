import styles from "./smallChops.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import OptimizedImage from "../../../../common/OptimizedImage";

//Small chops and pastries images

const smallChopImage =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440184/smallChops_m3yfzb.png";
const MilkyDonut =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440167/MilkyDonut_bmoaxk.jpg";
const pastries4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440162/pastries4_i2lkci.jpg";
const smallChops1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440163/smallChops1_tek752.jpg";
const smallChops2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440163/smallChops2_hidiuy.jpg";
const pastries1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440168/pastries1_gkcfrl.jpg";
const chinchin =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440164/chinchin_pcia8d.jpg";
const meatPie =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440185/meatPie_c8fzau.jpg";
const pastries2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440191/pastries2_e82sfa.jpg";
const pastries3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440177/pastries3_x4g7bz.jpg";
const pastries5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440162/pastries5_iltswk.jpg";
const meatPie2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440180/meatPie2_jhukz9.jpg";

export default function SmallChops() {
  const [selectedImage, setSelectedImage] = useState(null);
  //All sweet treats
  const smallChops = [
    {
      id: 1,
      image: smallChopImage,
      alt: "Small Chops",
    },
    {
      id: 2,
      image: MilkyDonut,
      alt: "Milky Donut",
    },
    {
      id: 3,
      image: pastries4,
      alt: "Shawama",
    },
    {
      id: 4,
      image: smallChops1,
      alt: "Small Chops",
    },
    {
      id: 5,
      image: smallChops2,
      alt: "Small Chops",
    },
    {
      id: 6,
      image: pastries1,
      alt: "Donuts",
    },
    {
      id: 7,
      image: chinchin,
      alt: "Chin Chin",
    },
    {
      id: 8,
      image: meatPie,
      alt: "Meat Pie and Sausage Rolls",
    },
    {
      id: 9,
      image: pastries2,
      alt: "Hamburger",
    },
    {
      id: 10,
      image: pastries3,
      alt: "Egg Roll",
    },
    {
      id: 11,
      image: pastries5,
      alt: "Shawama",
    },
    {
      id: 12,
      image: meatPie2,
      alt: "Meat Pie",
    },
  ];

  return (
    <div>
      <section className={styles.smallChopsContainer}>
        <h2 className={styles.heading}>Small Chops + Pastries</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {smallChops.map((image) => (
              <div className={styles.item} key={image.id}>
                <OptimizedImage
                  src={image.image}
                  alt={image.alt}
                  className={styles.galleryImages}
                  loading="lazy"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.image)}
                  widths={[200, 300, 400]}
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
                />
              </div>
            ))}
          </div>
        </div>
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
                alt="Small Chops + Pastries Images"
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
