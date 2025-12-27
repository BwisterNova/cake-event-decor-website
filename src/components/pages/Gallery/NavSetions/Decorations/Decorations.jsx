import styles from "./decorations.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//Wedding Decorations Images
const wedDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439953/wedDecor_e6yacq.jpg";
const wedDecor2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439959/wedDecor2_sayfr8.jpg";
const wedDecor3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440131/wedDecor3_kjbsij.jpg";
const wedDecor4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439983/wedDecor4_jpmcgl.jpg";
const wedDecor5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439964/wedDecor5_xvcmbj.jpg";
const wedDecor6 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440131/wedDecor6_rzmoiw.jpg";
const wedDecor7 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440064/wedDecor7_cwmtgq.jpg";
const wedDecor8 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440022/wedDecor8_uoz4mo.jpg";
const wedDecor9 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440134/wedDecor9_fhhxd8.jpg";
const wedDecor10 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440056/wedDecor10_lwtipu.jpg";
const wedDecor11 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440077/wedDecor11_dcm0df.jpg";
const wedDecor12 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440128/wedDecor12_uovhkz.jpg";
const wedDecor13 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439971/wedDecor13_clkxbo.jpg";
const wedDecor14 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439954/wedDecor14_wuwucz.jpg";
const wedDecor15 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439966/wedDecor15_xizwk0.jpg";
const wedDecor16 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439982/wedDecor16_lk0tv2.jpg";
const wedDecor17 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439956/wedDecor17_fzypa5.jpg";
const wedDecor18 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439974/wedDecor18_cctrkt.jpg";

//Events Decoration
const EventDecor1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439936/EventDecor1_ykbqig.jpg";
const EventDecor2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439954/wineWhiteDecor_qmgzkw.jpg";
const EventDecor3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439956/yellowBlueDecor_jhdxwi.jpg";
const EventDecor4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439935/decor2_jl0hsq.jpg";
const EventDecor5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439937/EventDecor5_zx8hdu.jpg";
const EventDecor6 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439937/EventDecor6_deh3yl.jpg";
const EventDecor7 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439940/EventDecor7_sqd2ng.jpg";
const EventDecor8 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439963/EventDecor8_ctx5gb.jpg";
const EventDecor9 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439964/EventDecor9_mb9yzu.jpg";
const EventDecor10 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440041/EventDecor10_qwygao.jpg";
const EventDecor11 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440080/EventDecor11_hob5kv.jpg";
const EventDecor12 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439970/EventDecor12_uzfpd9.jpg";
const EventDecor13 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440023/EventDecor13_yv9ejn.jpg";
const EventDecor14 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440144/EventDecor14_svkexz.jpg";
const EventDecor15 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440141/EventDecor15_yjvfce.jpg";
const EventDecor16 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439942/EventDecor16_c0lmoc.jpg";

//Birthday Cake
const BirthdayDecoration1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439944/BirthdayCake1_xrvjvb.jpg";
const BirthdayDecoration2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439947/BirthdayCake2_k4mbz8.jpg";
const BirthdayDecoration3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439947/BirthdayCake3_icgddr.jpg";
const BirthdayDecoration4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439958/BirthdayCake4_qzqj1k.jpg";
const BirthdayDecoration5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440111/BirthdayCake5_wciazv.jpg";
const BirthdayDecoration6 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440025/BirthdayCake6_zljdp6.jpg";
const BirthdayDecoration7 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440056/BirthdayCake7_yaakic.jpg";
const BirthdayDecoration8 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439935/BirthdayDecoration8_rp3tte.jpg";

export default function Decorations() {
  const location = useLocation();
  // Check if the URL contains a hash for the specific section
  useEffect(() => {
    if (location.hash === "#wedding-decorations") {
      const weddingDecor = document.getElementById("wedding-decorations");
      if (weddingDecor) {
        weddingDecor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [selectedImage, setSelectedImage] = useState(null);
  //Wedding Decorations
  const WeddingDecorations = [
    {
      id: 1,
      image: wedDecor,
      alt: "Wedding Decorations",
    },
    {
      id: 2,
      image: wedDecor2,
      alt: "Wedding Decorations",
    },
    {
      id: 3,
      image: wedDecor3,
      alt: "Wedding Decorations",
    },
    {
      id: 4,
      image: wedDecor4,
      alt: "Wedding Decorations",
    },
    {
      id: 5,
      image: wedDecor5,
      alt: "Wedding Decorations",
    },
    {
      id: 6,
      image: wedDecor6,
      alt: "Wedding Decorations",
    },
    {
      id: 7,
      image: wedDecor7,
      alt: "Wedding Decorations",
    },
    {
      id: 8,
      image: wedDecor8,
      alt: "Wedding Decorations",
    },
    {
      id: 9,
      image: wedDecor9,
      alt: "Wedding Decorations",
    },
    {
      id: 10,
      image: wedDecor10,
      alt: "Wedding Decorations",
    },
    {
      id: 11,
      image: wedDecor11,
      alt: "Wedding Decorations",
    },
    {
      id: 12,
      image: wedDecor12,
      alt: "Wedding Decorations",
    },
    {
      id: 13,
      image: wedDecor13,
      alt: "Wedding Decorations",
    },
    {
      id: 14,
      image: wedDecor14,
      alt: "Wedding Decorations",
    },
    {
      id: 15,
      image: wedDecor15,
      alt: "Wedding Decorations",
    },
    {
      id: 16,
      image: wedDecor16,
      alt: "Wedding Decorations",
    },
    {
      id: 17,
      image: wedDecor17,
      alt: "Wedding Decorations",
    },
    {
      id: 18,
      image: wedDecor18,
      alt: "Wedding Decorations",
    },
  ];

  //Event Decoration
  const EventDecorations = [
    {
      id: 1,
      image: EventDecor1,
      alt: "Event Decorations",
    },
    {
      id: 2,
      image: EventDecor2,
      alt: "Event Decorations",
    },
    {
      id: 3,
      image: EventDecor3,
      alt: "Event Decorations",
    },
    {
      id: 4,
      image: EventDecor4,
      alt: "Event Decorations",
    },
    {
      id: 5,
      image: EventDecor5,
      alt: "Event Decorations",
    },
    {
      id: 6,
      image: EventDecor6,
      alt: "Event Decorations",
    },
    {
      id: 7,
      image: EventDecor7,
      alt: "Event Decorations",
    },
    {
      id: 8,
      image: EventDecor8,
      alt: "Event Decorations",
    },
    {
      id: 9,
      image: EventDecor9,
      alt: "Event Decorations",
    },
    {
      id: 10,
      image: EventDecor10,
      alt: "Event Decorations",
    },
    {
      id: 11,
      image: EventDecor11,
      alt: "Event Decorations",
    },
    {
      id: 12,
      image: EventDecor12,
      alt: "Event Decorations",
    },
    {
      id: 13,
      image: EventDecor13,
      alt: "Event Decorations",
    },
    {
      id: 14,
      image: EventDecor14,
      alt: "Event Decorations",
    },
    {
      id: 15,
      image: EventDecor15,
      alt: "Event Decorations",
    },
    {
      id: 16,
      image: EventDecor16,
      alt: "Event Decorations",
    },
  ];
  //Birthday Decoration
  const BirthdayDecoration = [
    {
      id: 1,
      image: BirthdayDecoration1,
      alt: "Birthday Decorations",
    },
    {
      id: 2,
      image: BirthdayDecoration2,
      alt: "Birthday Decorations",
    },
    {
      id: 3,
      image: BirthdayDecoration3,
      alt: "Birthday Decorations",
    },
    {
      id: 4,
      image: BirthdayDecoration4,
      alt: "Birthday Decorations",
    },
    {
      id: 5,
      image: BirthdayDecoration5,
      alt: "Birthday Decorations",
    },
    {
      id: 6,
      image: BirthdayDecoration6,
      alt: "Birthday Decorations",
    },
    {
      id: 7,
      image: BirthdayDecoration7,
      alt: "Birthday Decorations",
    },
    {
      id: 8,
      image: BirthdayDecoration8,
      alt: "Birthday Decorations",
    },
  ];

  return (
    <div>
      {/* Wedding Decorations */}
      <section className={styles.decorationContainer} id="wedding-decorations">
        <h2 className={styles.heading}>Wedding Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {WeddingDecorations.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  className={styles.galleryImages}
                  loading="lazy"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Event Decoration */}
      <section className={styles.decorationContainer}>
        <h2 className={styles.heading}>Event Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {EventDecorations.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  className={styles.galleryImages}
                  loading="lazy"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Decoration */}
      <section className={styles.decorationContainer}>
        <h2 className={styles.heading}>Birthday Decorations</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {BirthdayDecoration.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  className={styles.galleryImages}
                  whileInView={{ opacity: 1, y: 0 }}
                  loading="lazy"
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image.image)}
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
              <img
                src={selectedImage}
                alt="Cake full view"
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
