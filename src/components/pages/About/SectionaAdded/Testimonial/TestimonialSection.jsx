// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./testimonialSection.module.css";
import OptimizedImage from "../../../../common/OptimizedImage";

const profile1 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704335/woman1_g4282p.jpg";
const profile2 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704328/man1_qr2vyw.jpg";
const profile3 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704333/woman2_r35h50.jpg";
const profile4 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704333/man2_o2iy1j.jpg";
const profile5 =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766704338/woman3_vzadks.jpg";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonialsData = [
  {
    id: 1,
    name: "Mrs Ajoke",
    role: "Happy Customer",
    message:
      "They made my daughter’s birthday so magical! The cake was stunning and delicious.",
    image: profile1,
  },
  {
    id: 2,
    name: "Mr Tonia",
    role: "Happy Customer",
    message:
      "They're professionals and very creative type of team. They really did exceeded my expectations.",
    image: profile2,
  },
  {
    id: 3,
    name: "Betty",
    role: "Client",
    message:
      "I love their event decorations, it's awesome, beautiful and fantastic I highly recommended their Service.",
    image: profile3,
  },
  {
    id: 4,
    name: "Goodness and Mercy",
    role: "Happy Customer",
    message:
      "The cake was not only beautiful but also delicious, Thank you for making my day really special.",
    image: profile4,
  },
  {
    id: 5,
    name: "Amarachi",
    role: "Client",
    message:
      "Best in the business, Love their work, The designs were elegant and their attention to detail in the decorations are incredible.",
    image: profile5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Customer Reviews</h2>

      {/* Swiper container */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // Add autoplay, nav & pagination support
        spaceBetween={20} // Space between each slide
        slidesPerView={3} // Desktop: 3 slides visible
        loop={true} // Makes the slides loop infinitely
        autoplay={{
          delay: 3500, // 3.5s between slides
          disableOnInteraction: false, // Keeps autoplay even after user swipes
        }}
        navigation // Enables prev/next buttons
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 2 }, // Tablet
          280: { slidesPerView: 1 }, // Mobile
        }}
      >
        {/* Render each testimonial as a Swiper slide */}
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={styles.card}>
              <OptimizedImage
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className={styles.image}
                widths={[100, 150, 200]}
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              />

              <p className={styles.message}>"{testimonial.message}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
