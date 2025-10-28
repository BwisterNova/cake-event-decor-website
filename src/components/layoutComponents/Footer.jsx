import { BiPhone } from "react-icons/bi";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const quickLinks = [
    { id: "about-us", name: "About us", link: "/about-us" },

    { id: "services", name: "Services", link: "/services" },

    { id: "gallery", name: "Gallery", link: "/gallery" },

    {
      id: "contact",
      name: "Contact us",

      link: "/contact-us",
    },
  ];

  const usefulTags = [
    {
      id: "benefits",
      name: "Benefits of Working With Us",
      link: "/services#benefits",
    },
    { id: "mission", name: "Our Mission", link: "/about-us#mission" },
    {
      id: "why-choose-us",
      name: "Why Choose Us",
      link: "/about-us#why-choose-us",
    },
    {
      id: "our-portfolio",
      name: "Our Portfolio",
      link: "/gallery",
    },
  ];

  return (
    <div>
      <footer
        className={`${styles.footer} ${inView ? styles.animateFooter : ""}`}
        ref={ref}
      >
        <div className={styles.container}>
          {/* Company Info */}
          <div className={`${styles.col} ${styles.fadeLeft}`}>
            <h3 className={styles.brand}>
              <FaBirthdayCake className={styles.icon} /> DE-Favour Global
              Concepts & Event
            </h3>
            <p className={styles.description}>
              Making your special moments memorable with elegant cakes, stunning
              decorations, and seamless event planning.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/arubuola.yemi/?igsh=YzljYTk1ODg3Zg%3D%3D#">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100090537637804#">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@yemi.arubuola.def">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${styles.col} ${styles.fadeUp}`}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Tags */}
          <div className={`${styles.col} ${styles.fadeRight}`}>
            <h4>Useful Tags</h4>
            <ul>
              {usefulTags.map((tag) => (
                <li key={tag.id}>
                  <a href={tag.link}>{tag.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${styles.col} ${styles.fadeIn}`}>
            <h4>Get In Touch</h4>
            <ul className={styles.contact}>
              <li>
                <FaEnvelope /> arubuola.yemi@gmail.com
              </li>
              <li>
                <BiPhone style={{ fontSize: "20px", color: "#fff" }} />{" "}
                +2348034370838, +2348029915193
              </li>
              <li>
                <FaMapMarkerAlt /> Igwe Bustop, Atan-ota, Ogun State.
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.bottomBar} ${styles.fadeUp}`}>
          <p>
            © 2025 DE-Favour Global Concepts & Event.{" "}
            <span>All rights reserved.</span>
          </p>
          <div className={styles.bottomLinks}>
            <a href="/about-us">About</a>
            <a href="/services">Services</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
