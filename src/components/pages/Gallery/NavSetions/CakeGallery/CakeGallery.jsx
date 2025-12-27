import { useEffect, useState } from "react";
import styles from "./cakeGallery.module.css";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

//Birthday Cakes
const flowerCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439480/flowerCake_ogouvd.jpg";
const creamPinkCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439456/creamPinkCake_skcmzd.jpg";
const cakeDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439452/cakeDecor_vsjdn9.jpg";

const yellowCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439489/yellowCake_qv4uxc.jpg";
const womanCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439541/womanCake_tsdhlm.jpg";
const Bcake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439451/Bcake_uo2nhz.jpg";
const pawsCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439723/pawsCake_jhy30r.jpg";
const barbieCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439769/barbieCake_tpjqi1.jpg";
const sofiaCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439559/sofiaCake_jlyp7t.jpg";
const mickyCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439548/mickyCake_t29iws.jpg";
const whiteDarkCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439489/whiteDarkCake_wed4oe.jpg";
const manCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439490/70Cake_eeescj.jpg";
const orangeChocoCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439482/orangeChocoCake_ihopx0.jpg";
const pinkCreamCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439486/pinkCreamCake_i1m0f7.jpg";
const whiteChocoPinkCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439489/whiteChocoPinkCake_tkom5g.jpg";
const hexagonCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439485/hexagonCake_kpqmu4.jpg";
const bCake17 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439451/bCake17_javu5n.jpg";
const bCake18 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439451/bCake18_vpwloq.jpg";
const babyCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439673/babyCake_pddkkh.jpg";
const churchAnniversary =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755520069/churchAnniversary_z6sdtf.jpg";
const bCake19 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439746/bCake19_e0ri47.jpg";
const bCake20 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439748/bCake20_mub9mv.jpg";
const bCake21 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439672/bCake21_ryadxh.jpg";
const bCake22 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439622/bCake22_tontpk.jpg";
const bCake23 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439756/bCake23_xbgzg2.jpg";
const bCake24 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439737/bCake24_xwr2yc.jpg";
const bCake25 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439746/bCake25_czcuq2.jpg";
const bCake26 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439766/bCake26_fpgcji.jpg";
const bCake27 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439799/bCake27_rigkl9.jpg";
const bCake28 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439889/bCake28_owcwkj.jpg";

//Wedding Cake
const wedCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439488/wedCake1_mgw1p0.jpg";
const wedCake2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439637/wedCake2_jeb8hu.jpg";
const whiteBlueCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439489/whiteBlueCake_kqywwr.jpg";
const wedCake3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439630/wedCake3_fcgtgd.jpg";
const wedCake4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439684/wedCake4_jrmmmz.jpg";
const wedCake5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439756/wedCake5_apobca.jpg";
const wedCake6 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439722/wedCake6_hzq6xi.jpg";
const wedCake7 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439763/wedCake7_vqciud.jpg";
const wedCake8 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439738/wedCake8_cte0wd.jpg";
const wedCake9 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439733/wedCake9_jw26n4.jpg";
const wedCake10 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439726/wedCake10_hcruje.jpg";
const wedCake11 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439488/weddingCake_xqlrq1.jpg";
const wedCake12 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439725/wedCake12_hmul3j.jpg";
const wedCake13 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439488/wedCake13_hrpgbv.jpg";
const wedCake14 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439532/wedCake14_pbcrg1.jpg";

//Graduation Cake
const graduationCake1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439484/graduationCake1_zvtayy.jpg";
const graduationCake2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439827/graduationCake2_g93xr3.jpg";
const graduationCake3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439470/graduationCake3_jgtjks.jpg";
const graduationCake4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439865/graduationCake4_ah49kr.jpg";
const graduationCake5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439484/graduationCake5_e7hshh.jpg";

//Cup Cakes Cake
const cupCakes1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439463/cupCakes1_t5vdzb.jpg";
const cupCakes2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439468/cupCakes2_maozvw.jpg";
const cupCakes3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439484/cupCakes3_wtr6yu.jpg";
const cupCakes4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439484/cupCakes4_qq6wbb.jpg";
const cupCakes5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439465/cupCake5_tlimkg.jpg";

export default function CakeGallery() {
  //for the Images
  const [selectedImage, setSelectedImage] = useState(null);

  const location = useLocation();
  //THis useEffect hook will be responsible for finding the id in the sections
  useEffect(() => {
    if (location.hash === "#birthdayCake") {
      const birthdayCake = document.getElementById("birthdayCake");
      if (birthdayCake) {
        birthdayCake.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#weddingCake") {
      const weddingCake = document.getElementById("weddingCake");
      if (weddingCake) {
        weddingCake.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  //Birthday Cakes
  const BirthdayCakes = [
    {
      id: 1,
      image: flowerCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 2,
      image: creamPinkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 3,
      image: cakeDecor,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 4,
      image: yellowCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 5,
      image: womanCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 6,
      image: Bcake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 7,
      image: pawsCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 8,
      image: barbieCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 9,
      image: sofiaCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 10,
      image: mickyCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 11,
      image: whiteDarkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 12,
      image: manCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 13,
      image: orangeChocoCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 14,
      image: pinkCreamCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 15,
      image: whiteChocoPinkCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 16,
      image: hexagonCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 17,
      image: bCake17,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 18,
      image: bCake18,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 19,
      image: babyCake,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 20,
      image: churchAnniversary,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 21,
      image: bCake19,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 22,
      image: bCake20,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 23,
      image: bCake21,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 24,
      image: bCake22,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 25,
      image: bCake23,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 26,
      image: bCake24,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 27,
      image: bCake25,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 28,
      image: bCake26,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 29,
      image: bCake27,
      alt: "Birthday + Custom Cakes",
    },
    {
      id: 30,
      image: bCake28,
      alt: "Birthday + Custom Cakes",
    },
  ];

  //Wedding + Anniversary Cakes
  const WeddingCakes = [
    {
      id: 1,
      image: wedCake,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 2,
      image: wedCake2,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 3,
      image: whiteBlueCake,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 4,
      image: wedCake3,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 5,
      image: wedCake4,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 6,
      image: wedCake5,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 7,
      image: wedCake6,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 8,
      image: wedCake7,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 9,
      image: wedCake8,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 10,
      image: wedCake9,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 11,
      image: wedCake10,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 12,
      image: wedCake11,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 13,
      image: wedCake12,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 14,
      image: wedCake13,
      alt: "Wedding + Anniversary Cakes",
    },
    {
      id: 15,
      image: wedCake14,
      alt: "Wedding + Anniversary Cakes",
    },
  ];

  //graduation Cakes
  const graduationCakes = [
    {
      id: 1,
      image: graduationCake1,
      alt: "Graduation Cakes",
    },
    {
      id: 2,
      image: graduationCake2,
      alt: "Graduation Cakes",
    },
    {
      id: 3,
      image: graduationCake3,
      alt: "Graduation Cakes",
    },
    {
      id: 4,
      image: graduationCake4,
      alt: "Graduation Cakes",
    },
    {
      id: 5,
      image: graduationCake5,
      alt: "Graduation Cakes",
    },
  ];
  //Cup Cakes
  const cupCakes = [
    {
      id: 1,
      image: cupCakes1,
      alt: "Cup Cakes",
    },
    {
      id: 2,
      image: cupCakes2,
      alt: "Cup Cakes",
    },
    {
      id: 3,
      image: cupCakes3,
      alt: "Cup Cakes",
    },
    {
      id: 4,
      image: cupCakes4,
      alt: "Cup Cakes",
    },
    {
      id: 5,
      image: cupCakes5,
      alt: "Cup Cakes",
    },
  ];

  return (
    <div>
      {/*Birthday Cakes */}
      <section className={styles.cakesContainer} id="birthdayCake">
        <h2 className={styles.heading}>Birthday + Custom Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {BirthdayCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
                  className={styles.galleryImages}
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

      {/*Wedding + Anniversary Cakes */}
      <section className={styles.cakesContainer} id="weddingCake">
        <h2 className={styles.heading}>Wedding + Anniversary Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {WeddingCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
                  className={styles.galleryImages}
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

      {/*Cup Cakes */}
      <section className={styles.cakesContainer} id="graduationCakes">
        <h2 className={styles.heading}>Graduation Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {graduationCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
                  className={styles.galleryImages}
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

      {/*Cup Cakes */}
      <section className={styles.cakesContainer} id="cupCakes">
        <h2 className={styles.heading}>Cup Cakes</h2>
        <div className={styles.overflowContainer}>
          <div className={styles.grid}>
            {cupCakes.map((image) => (
              <div className={styles.item} key={image.id}>
                <motion.img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
                  className={styles.galleryImages}
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
      {/* Animations for the Images */}
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
