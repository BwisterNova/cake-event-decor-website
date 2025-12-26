import styles from "./heroSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

//For Images
const slide1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703802/StageDecor_dqo0fq.png";
const slide2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703708/chocoCake_wyvjc8.png";
const slide3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703707/BirthdayEvent_mptiib.png";

export default function HeroSection() {
  const slides = [
    {
      image: slide1,
      heading: "Welcome to De-Favour Global Concepts & Events",
      description:
        "Creating unforgettable moments with exquite designs and delicious creations.",
    },
    {
      image: slide2,
      heading: "Celebrate Beautifully",
      description:
        "Crafting exotic cakes and stunning event decoration that leave a lasting impression.",
    },
    {
      image: slide3,
      heading: "Join Our Creative Journey",
      description:
        "Explore our gallery of breathtaking events and delectable cakes that reflect our passion for quality and creativity.",
    },
  ];

  return (
    <div>
      <section className={styles.heroSection}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade" //  Smooth fading transition
          autoplay={{
            delay: 5000, // Change every 5 seconds
            disableOnInteraction: false, //  Keep autoplay active on swipe
          }}
          loop={true} //  Loop through the slides
          className={styles.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${slide.image})` }} //  Background image
              >
                {/* Zoom out animation wrapper */}
                <motion.div
                  className={styles.overlay}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5 }} // 🌀 Slow zoom out
                >
                  {/* Text wrapper with motion effects */}
                  <div className={styles.textWrapper}>
                    {/* Heading animation */}
                    <motion.h1
                      className={styles.heading}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {slide.heading}
                    </motion.h1>

                    {/* Description animation */}
                    <motion.p
                      className={styles.description}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
