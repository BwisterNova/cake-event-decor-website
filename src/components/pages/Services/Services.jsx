import Benefits from "./SectionsAdded/Benefits/Benefits";
import CelebrationSection from "./SectionsAdded/CelebrationSection/CelebrationSection";
import ExtraServices from "./SectionsAdded/Extra Services/ExtraServices";
import GalleryShowCase from "./SectionsAdded/GalleryShowCase/GalleyShowCase";
import styles from "./services.module.css";
import { Helmet } from "react-helmet";
import OptimizedImage from "../../common/OptimizedImage";

const cake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1767180936/IMG_20250828_142646_588_1817851438_xig6zj.jpg";
const decorate =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1767196463/IMG_20251011_075853_084_-216214221_gtervo.jpg";
const Mentorship =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704165/Ceo_Student1_amvjap.jpg";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//  Import motion from framer-motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Exotic Cake Making",
    description:
      "Whether you want a simple birthday cake or a grand wedding masterpiece, we craft cakes that taste as amazing as they look.",
    Image: cake,
  },
  {
    id: 2,
    title: "Event Planning & Decoration",
    description:
      "From concept to coordination, we manage every detail of your events & make stunning decorations that match your theme, style, and personality.",
    Image: decorate,
  },
  {
    id: 3,
    title: "Training & Mentorship",
    description:
      "Empowering the next generation with hands-on training in event planning and cake artistry.",
    Image: Mentorship,
  },
];

export default function Services() {
  //This will be responsible for checking the url for the core-services section
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#core-services") {
      const coreServices = document.getElementById("services");
      if (coreServices) {
        coreServices.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Our Services - DE-Favour Cakes & Events</title>
        <meta
          name="description"
          content="Explore our services including custom cakes, event decorations, catering, and more for your special events."
        />
      </Helmet>
      <main>
        {/*Hero Section */}
        <section className={styles.hero}>
          <div className={styles.cover}></div>
          <div className={styles.overlay}>
            <h1 className={styles.title}>We Create, Plan & Inspire</h1>
            <p className={styles.subtitle}>
              From exotic cakes to unforgettable events and empowering
              trainings, we help you celebrate life’s special moments.
            </p>
            <div className={styles.buttons}>
              <Link to="/services" className={styles.primaryBtn}>
                Check Out Services
              </Link>
              <a href="/contact-us" className={styles.secondaryBtn}>
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/*Core Services Section */}
        <section className={styles.coreServices} id="services">
          <div className={styles.header}>
            <h2 className={styles.heading}>Our Core Services</h2>
            <p className={styles.subtext}>
              Experience the best of our capabilities that are built on a
              foundation of quality, reliability & customer centricity.
            </p>
          </div>

          <div className={styles.cardsContainer}>
            {/* 2. Use motion.div for each card and animate on scroll into view */}
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }} // Start faded and moved down
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and up
                viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% visible
                transition={{
                  duration: 0.7,
                  delay: index * 0.2, // Stagger each card
                  ease: "easeOut",
                }}
              >
                <OptimizedImage
                  src={service.Image}
                  alt={service.title}
                  className={styles.img}
                  widths={[300, 500, 700]}
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 700px"
                />
                <div className={styles.cardTexts}>
                  <h3 className={styles.titleExtra}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/*Extra Services Section */}
        <section>
          <ExtraServices />
        </section>
        {/*Gallery Section */}
        <section>
          <GalleryShowCase />
        </section>
        {/*Benefits Section */}
        <section>
          <Benefits />
        </section>
        {/*Celebration Section */}
        <section>
          <CelebrationSection />
        </section>
      </main>
    </div>
  );
}
