import { useLocation } from "react-router-dom";
import styles from "./galleries.module.css";
import Gallery from "./GalleryTab/Gallery";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Galleries() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#gallery-tabs") {
      const galleryTabs = document.getElementById("gallery-tabs");
      if (galleryTabs) {
        galleryTabs.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Gallery - DE-Favour Cakes & Events</title>
        <meta
          name="description"
          content="Browse our gallery of beautiful cakes, event decorations, and small chops for inspiration."
        />
      </Helmet>
      <section className={styles.heroSection} id="gallery-tabs">
        <div className={styles.heroContent}>
          <div className={styles.overlay}></div>

          <h1 className={styles.heroHeading}>Galleries</h1>
        </div>
      </section>
      {/*Tab for the Galleries */}
      <section>
        <Gallery />
      </section>
    </div>
  );
}
