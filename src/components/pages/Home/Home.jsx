import styles from "./home.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet";

import HeroSection from "./SectionsAdded/HeroSection/HeroSection";
import OptimizedImage from "../../common/OptimizedImage";

const chocolateCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1767180936/IMG_20251113_173741_789_237503579_pt3rer.jpg";
const EventDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1767181249/IMG_20251011_123516_889_-243666080_xqda0a.jpg";
const decor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1767196487/IMG_20251011_075750_684_-556779275_hlfzxq.jpg";
const GallerySection = React.lazy(() =>
  import("./SectionsAdded/GallerySection/GallerySection")
);
const TestimonialsSection = React.lazy(() =>
  import("./SectionsAdded/TestimonialsSection/TestimonialsSection")
);

export default function Home() {
  //for the welcome section
  const welcomeRef = useRef(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  //for the services section
  const servicesRef = useRef(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  // for the gallery section
  const galleryRef = useRef(null);
  const [galleryVisible, setGalleryVisible] = useState(false);

  // for the testimonials section
  const testimonialsRef = useRef(null);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  //--  ALL THIS ARE FOR THE ANIMATIONS IN EACH SECTIONS ---
  //for the welcome section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWelcomeVisible(true);
      },
      { threshold: 0.3 }
    );
    if (welcomeRef.current) observer.observe(welcomeRef.current);
    return () => observer.disconnect();
  }, []);

  //for the services section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setServicesVisible(true);
      },
      { threshold: 0.3 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  //for the gallery section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setGalleryVisible(true);
      },
      { threshold: 0.3 }
    );
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  //for the testimonials section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTestimonialsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    return () => observer.disconnect();
  }, []);

  //THIS FUNCTION MAKE THE BUTTON IN THE SERVICES SECTION TO NAVIGATE TO ANOTHER PAGE SECTION(it will navigate to services section)
  const navigate = useNavigate();

  function handleClick() {
    navigate("/services#core-services");
  }

  return (
    <div>
      <Helmet>
        <title>
          DE-Favour Cakes & Events - Premium Cakes and Event Decorations
        </title>
        <meta
          name="description"
          content="Discover exquisite cakes, event decorations, and catering services by DE-Favour. Perfect for birthdays, weddings, and celebrations in Nigeria."
        />
        <meta
          name="keywords"
          content="cakes, event decorations, catering, birthday cakes, wedding cakes, small chops, Nigeria"
        />
        <meta property="og:title" content="DE-Favour Cakes and Events" />
        <meta
          property="og:description"
          content="Premium cakes and event decorations for your special occasions."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703802/StageDecor_dqo0fq.png"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className={styles.main}>
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* Welcome Section */}
        <section
          className={`${styles.section} ${welcomeVisible ? styles.active : ""}`}
          ref={welcomeRef}
        >
          <h2 className={styles.sectionTitle}>
            Welcome to DE-Favour Global Concepts & Event
          </h2>
          <p className={styles.sectionText}>
            We are passionate about creating unforgettable moments through
            seamless event planning, delicious cakes, and breathtaking
            decorations. Whether it's a wedding, birthday, or corporate events
            we bring your vision to reality!
          </p>
        </section>

        {/* Services Preview */}
        <section className={styles.servicesSection} ref={servicesRef}>
          <div className={styles.servicesHeading}>
            <h2
              className={`${styles.servicesTitle} ${
                servicesVisible ? styles.zoomUp : ""
              }`}
            >
              Our Services
            </h2>
            <p
              className={`${styles.servicesDesc} ${
                servicesVisible ? styles.fadeUp : ""
              }`}
            >
              We offer a range of Services to make your special occasions
              memorable. From exotic cakes to full event planning and
              decorations, we've got you covered.
            </p>
          </div>
          <div className={styles.servicesSectionCard}>
            <div
              className={`${styles.serviceCard} ${
                servicesVisible ? styles.cardFadeUp1 : ""
              }`}
            >
              <OptimizedImage
                src={chocolateCake}
                alt="Cake Making"
                className={styles.serviceIcon}
                widths={[200, 300, 400]}
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
              />
              <h3 className={styles.serviceTitle}>Exotic Cake Making</h3>
              <p>
                Delicious cakes for all occasions. From birthday to weddings,
                our exotic cakes are made with the finest ingredients and
                designed to your specifications.
              </p>
            </div>
            <div
              className={`${styles.serviceCard} ${
                servicesVisible ? styles.cardFadeUp2 : ""
              }`}
            >
              <OptimizedImage
                src={EventDecor}
                alt="Event Planning"
                className={styles.serviceIcon}
                widths={[200, 300, 400]}
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
              />
              <h3 className={styles.serviceTitle}>Event Planning</h3>
              <p>
                Full-service event planning to make your special day perfect. We
                handle everything from venue selection to day of coordination,
                ensuring a stres free experience.
              </p>
            </div>
            <div
              className={`${styles.serviceCard} ${
                servicesVisible ? styles.cardFadeUp3 : ""
              }`}
            >
              <OptimizedImage
                src={decor}
                alt="Decorations"
                className={styles.serviceIcon}
                widths={[200, 300, 400]}
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
              />
              <h3 className={styles.serviceTitle}>Decorations</h3>
              <p>
                Beautiful decorations to transform any space. Our decoration
                services include floral designs, table settings, and themed
                decoration of any occasions.
              </p>
            </div>
          </div>
          {/* The button that navigate to a section in services page */}
          <div>
            <button onClick={handleClick}> See More on Services</button>
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.sectionGallery}>
          <div
            className={`${styles.gallerySection} ${
              galleryVisible ? styles.active : ""
            }`}
            ref={galleryRef}
          >
            <h2 className={styles.galleryTitle}>Our Portfolio</h2>
            <p className={styles.galleryDescription}>
              Discover our portfolio of stunning cakes, events, and decorations.
              Click any item to see what we've created for our clients each
              piece reflects our passion for quality and creativity.
            </p>
            <Suspense fallback={<div>Loading...</div>}>
              <GallerySection />
            </Suspense>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className={`${styles.testimonialsSection} ${
            testimonialsVisible ? styles.slideIn : ""
          }`}
          ref={testimonialsRef}
        >
          <h2 className={styles.testimonialsTitle}>Enjoyed by Many</h2>
          <p className={styles.testimonialsDescription}>
            Real Stories, Real Bites, Real Love. Hear from those who have Tasted
            the Difference.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <TestimonialsSection />
          </Suspense>
        </section>

        {/*Contact Section */}
        <section className={styles.AdditionalSection}>
          <h3 className={styles.additionalTitle}>
            Let craft your unforgettable celebrations!
          </h3>
          <p className={styles.additonalDescription}>
            With our Event planning services, exquiste exotic cakes and elegant
            decorations let make your special day truly unforgettable.
          </p>

          <a href="/contact">
            <button>Get a Free Quote</button>
          </a>
        </section>
      </main>
    </div>
  );
}
