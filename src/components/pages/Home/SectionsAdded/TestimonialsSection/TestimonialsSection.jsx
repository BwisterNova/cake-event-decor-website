import styles from "./testimonialsSection.module.css";
import { useState, useEffect } from "react";
import OptimizedImage from "../../../../common/OptimizedImage";

//Client Images
const profile1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703683/woman1_enmhlb.jpg";
const profile2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703570/man1_mpiq2z.jpg";
const profile3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703683/woman2_zirxr2.jpg";
const profile4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703696/man2_wfg6qw.jpg";
const profile5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703689/woman3_qeq9wa.jpg";

const reviews = [
  {
    id: 1,
    name: "Mrs Ajoke",
    profile: profile1,
    stars: 4,
    text: "They made my daughter’s birthday so magical! The cake was stunning and delicious.",
  },
  {
    id: 2,
    name: "Mr Tonia",
    profile: profile2,
    stars: 5,
    text: "They're professionals and very creative type of team. They really did exceeded my expectations.",
  },
  {
    id: 3,
    name: "Betty",
    profile: profile3,
    stars: 5,
    text: "I love their event decorations, it's awesome, beautiful and fantastic I highly recommended their Service.",
  },

  {
    id: 4,
    name: "Goodness and Mercy",
    profile: profile4,
    stars: 5,
    text: "The cake was not only beautiful but also delicious, Thank you for making my day really special.",
  },

  {
    id: 5,
    name: "Amarachi",
    profile: profile5,
    stars: 5,
    text: "Best in the business, Love their work, The designs were elegant and their attention to detail in the decorations are incredible.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000); // 4 seconds
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.bgImage}></div>
      <div className={styles.reviewCard}>
        <OptimizedImage
          src={reviews[current].profile}
          alt={reviews[current].name}
          className={styles.profileImg}
          widths={[100, 150, 200]}
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
        />
        <div className={styles.cardHeader}>
          <span className={styles.name}>{reviews[current].name}</span>
          <span className={styles.stars}>
            {Array(reviews[current].stars)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </span>
        </div>
        <p className={styles.reviewText}>{reviews[current].text}</p>
        <button className={styles.prevBtn} onClick={prevReview}>
          &larr;
        </button>
        <button className={styles.nextBtn} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  );
}
