import styles from "./testimonialsSection.module.css";
import OptimizedImage from "../../../../common/OptimizedImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            280: { slidesPerView: 1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <OptimizedImage
                  src={review.profile}
                  alt={review.name}
                  className={styles.profileImg}
                  widths={[100, 150, 200]}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
                <div className={styles.cardHeader}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.stars}>
                    {Array(review.stars)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </span>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
