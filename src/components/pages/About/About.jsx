import styles from "./about.module.css";
import { Helmet } from "react-helmet";
import OptimizedImage from "../../common/OptimizedImage";
const decor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704368/Decor_uzuohs.png";
const wedSpace =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704377/wedSpace_bhwp9f.png";
const happyFounder =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704370/happyFounder_mefjt7.jpg";
const founder =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704335/founder_mh7kex.jpg";
const candleCakeIcon =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704346/candleCakeIcon_pszo1c.png";
const CalenderIcon =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704348/Calender_gpyv1d.png";
const purpleIcon =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704335/purpleIcon_ck37cl.png";

import TestimonialSection from "./SectionaAdded/Testimonial/TestimonialSection";

import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function About() {
  const location = useLocation();

  // Refs for animations
  const cardsSectionRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const founderSectionRef = useRef(null);
  const celebrateSectionRef = useRef(null);
  const getInTouchRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#mission") {
      const coreServices = document.getElementById("mission");
      if (coreServices) {
        coreServices.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#why-choose-us") {
      const whyChooseUs = document.getElementById("why-choose-us");
      if (whyChooseUs) {
        whyChooseUs.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Animation for cardsSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = cardsSectionRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Animation for whyChooseUs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = whyChooseUsRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Animation for founderSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInUp);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (founderSectionRef.current) observer.observe(founderSectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation for celebrateSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInScale);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (celebrateSectionRef.current)
      observer.observe(celebrateSectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation for getInTouch
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.slideInLeft);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (getInTouchRef.current) observer.observe(getInTouchRef.current);

    return () => observer.disconnect();
  }, []);

  const aboutCards = [
    {
      id: 1,
      image: decor,
      title: "Our Mission",
      description:
        "At De-Favour, our mission is to bring joy, elegance, and unforgettable moments to life through beautifully crafted cakes, seamless event planning, and creative decorations. We’re passionate about turning visions into reality whether it's a wedding, birthday, corporate event, or special gathering.",
    },
    {
      id: 2,
      image: wedSpace,
      title: "Our Vision",
      description:
        "To become a leading name in the celebration industry recognized for exceptional creativity, outstanding service, and the ability to turn ordinary moments into extraordinary experiences. We envision a future where our work inspires joy and our trainings empower the next generation of creatives.",
    },
    {
      id: 3,
      image: happyFounder,
      title: "Our Goal",
      description:
        "Our goal is to be your number one destination for all things that require celebration from stunning event setups to amazing cakes and pastries. We aim to consistently deliver excellence, inspire creativity, and create memories that last a lifetime.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>About Us - DE-Favour Cakes & Events</title>
        <meta
          name="description"
          content="Learn about DE-Favour Cakes & Events, our story, mission, and commitment to quality cakes and event decorations."
        />
      </Helmet>
      <main className={styles.main}>
        {/* About Background */}
        <section className={styles.intro}>
          <h1 className={styles.title}>Who Are We</h1>
          <p>
            <a href="/">Home</a> / ABOUT
          </p>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.text}>
            <h2>At De-Favour Global Concepts & Events</h2>
            <p>
              Every celebration tells a story. At De-Favour, we turn your
              moments into unforgettable experiences with a perfect blend of
              creativity, style and passion.
            </p>
          </div>
        </section>
        {/* cards Section */}
        <section
          className={styles.cardsSection}
          id="mission"
          ref={cardsSectionRef}
        >
          <div className={styles.cardSection}>
            {aboutCards.map((cards) => (
              <div className={styles.card} key={cards.id}>
                <OptimizedImage
                  src={cards.image}
                  alt={cards.title}
                  className={styles.image}
                  widths={[200, 300, 400]}
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
                />
                <div className={styles.texts}>
                  <h2 className={styles.title}>{cards.title}</h2>
                  <p className={styles.description}>{cards.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the founder Section */}
        <section className={styles.founderSection} ref={founderSectionRef}>
          <h2 className={styles.founderTitle}>Meet the CEO</h2>
          <p className={styles.founderText}>
            Meet the visionary behind De-Favour Global Concepts & Event.
          </p>
          <div className={styles.miniSection}>
            <div className={styles.founderCont}>
              <div className={styles.blackBackground}></div>
              <div className={styles.whiteBackground}></div>
            </div>

            <div className={styles.imgSection}>
              <OptimizedImage
                src={founder}
                alt="The Founder"
                className={styles.founderImg}
                widths={[300, 500, 700]}
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 700px"
              />
              <div className={styles.imgText}>
                <h2>ARUBUOLA YEMI ALICE</h2>
                <h3>Founder</h3>
                <p>
                  Meet the CEO, Yemi Arubuola a passionate entrepreneur who
                  turned her love for creativity into a thriving brand. With
                  years of experience, she brings imagination to life, crafting
                  unforgettable experiences that delight and inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us Section */}
        <section
          className={styles.whyChooseUs}
          id="why-choose-us"
          ref={whyChooseUsRef}
        >
          <h2 className={styles.title}>Why Choose Us?</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <OptimizedImage
                src={candleCakeIcon}
                alt="Cake"
                className={styles.icon}
              />
              <h3>Custom Cakes with a Personal Touch</h3>
              <p>
                Each cake is uniquely designed to match your taste, theme, and
                celebration fresh, beautiful, and unforgettable.
              </p>
            </div>

            <div className={styles.card}>
              <OptimizedImage
                src={CalenderIcon}
                alt="Calender "
                className={styles.icon}
              />
              <h3>Stress-Free Event Planning</h3>
              <p>
                We handle everything from concept to execution, ensuring your
                events are seamless, organized, and stylish.
              </p>
            </div>

            <div className={styles.card}>
              <OptimizedImage
                src={purpleIcon}
                alt="Purple Heart"
                className={styles.icon}
              />

              <h3>Passion in Every Detail</h3>
              <p>
                Your happiness is our priority. We treat every event like our
                own, pouring love and care into every element.
              </p>
            </div>
          </div>
        </section>

        {/*Celebrate Section */}
        <section className={styles.celebrateSection} ref={celebrateSectionRef}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <span className={styles.tag}>Celebrate with De-Favour</span>
            <h2 className={styles.title}>
              Make Your Celebration Truly Special!
            </h2>
            <p className={styles.subtitle}>
              We add a sweet surprise to events from personalized cupcakes to
              magical decorations touches, because you deserve more than just a
              party.
            </p>
          </div>
        </section>

        {/*testimonial Section */}
        <section>
          <TestimonialSection />
        </section>

        {/*Get In Touch Section */}
        <section className={styles.getInTouch} ref={getInTouchRef}>
          <div className={styles.contactOverlay}>
            <h2 className={styles.contactHeading}>
              Ready to Start Your Celebration?
            </h2>
            <p className={styles.contactSubtext}>
              Let’s create unforgettable moments together. Reach out now!
            </p>

            <div className={styles.contactButtons}>
              <a href="/contact" className={styles.contactPrimaryBtn}>
                Contact Us
              </a>
              <a
                href="tel:+2348034370838"
                className={styles.contactSecondaryBtn}
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
