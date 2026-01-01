import styles from "./benefits.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Benefits() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#benefits") {
      const coreServices = document.getElementById("benefits");
      if (coreServices) {
        coreServices.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const benefitsData = [
    {
      icon: "🧩",
      title: "All-in-One Event Solutions",
      description:
        "One contact, zero stress from cakes to decoration to planning, we handle it all.",
    },
    {
      icon: "⏱️",
      title: "Time-Saving Execution",
      description:
        "We manage the nitty-gritty so you can focus on enjoying your event.",
    },
    {
      icon: "🎨",
      title: "Creative & Custom Designs",
      description:
        "Every cake, every setup, every detail is made to match your vision perfectly.",
    },
    {
      icon: "💸",
      title: "Affordable Packages",
      description:
        "Luxury doesn’t have to break the bank we offer value-driven pricing.",
    },
    {
      icon: "✅",
      title: "Reliable & Professional Team",
      description:
        "On time. On point. Always ready to deliver beyond expectations.",
    },
    {
      icon: "🎯",
      title: "Client-Centered Planning",
      description:
        "We listen, we understand, and we bring your dream to life with precision.",
    },
    {
      icon: "🌐",
      title: "Wider Service Reach",
      description:
        "Serving clients across your region we’re always closer than you think.",
    },
    {
      icon: "🛠️",
      title: "Flexible & Scalable Services",
      description:
        "From intimate birthdays to large-scale weddings, we adapt to your needs.",
    },
  ];

  //for the animation of the section
  const sectionRef = useRef(null);

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

    const cards = sectionRef.current?.querySelectorAll(
      `.${styles.benefitCard}`
    );
    const timeout = setTimeout(() => {
      cards?.forEach((card) => observer.observe(card));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <section className={styles.benefits} ref={sectionRef} id="benefits">
        <h2 className={styles.heading}>
          <span>Benefits</span> of Working With Us
        </h2>
        <div className={styles.grid}>
          {benefitsData.map((item, index) => (
            <div key={index} className={`${styles.benefitCard}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
