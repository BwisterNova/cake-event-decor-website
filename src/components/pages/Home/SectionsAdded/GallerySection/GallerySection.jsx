import GalleryContent from "./GalleryContents/GalleryContent";
import styles from "./gallerySection.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const chocolateCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755439451/Bcake_uo2nhz.jpg";
const stageDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1755440141/EventDecor15_yjvfce.jpg";
const TableDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703680/TableDecor_foq23t.jpg";
const weddingCake =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703679/weddingCake_mvph32.jpg";
const pastries =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703575/pastries_kfltzd.jpg";
const birthdayDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703604/birthdayDecor_nthfe0.jpg";
const smallChops =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703591/SmallChops_vq80e0.jpg";
const EventDecor =
  "https://res.cloudinary.com/diwmaqpd8/image/upload/v1766703684/EventDecor8_tlszej.jpg";

export default function GallerySection() {
  //All this contain all the Imeges below the Tab menu. Plus they navigate to othe page when clicked on the see more
  const navigate = useNavigate();

  function handleClick() {
    navigate("/gallery#gallery-tabs");
  }

  const [activeTab, setActiveTab] = useState("All");

  const galleryItems = [
    {
      id: 1,
      type: "Cakes",
      img: chocolateCake,
      title: "Birthday Cakes",
      link: "/gallery#birthdayCake",
    },
    {
      id: 2,
      type: "Decorations",
      img: stageDecor,
      title: "Decorations",
      link: "/gallery#wedding",
    },
    {
      id: 3,
      type: "Decorations",
      img: TableDecor,
      title: "Centerpiece",
      link: "/gallery#birthdayCake",
    },
    {
      id: 4,
      type: "Cakes",
      img: weddingCake,
      title: "Wedding Cakes",
      link: "/gallery#weddingCake",
    },
    {
      id: 5,
      type: "Decorations",
      img: EventDecor,
      title: "Event Decorations",
      link: "/gallery#",
    },
    {
      id: 6,
      type: "Sweet Treats",
      img: pastries,
      title: "Pastries",
      link: "/gallery#",
    },
    {
      id: 7,
      type: "Sweet Treats",
      img: smallChops,
      title: "Small Chops",
      link: "/gallery#",
    },
    {
      id: 8,
      type: "Decorations",
      img: birthdayDecor,
      title: "Birthday Decorations",
      link: "/gallery#birthdayCake",
    },
  ];

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === activeTab);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryNav}>
        {["All", "Cakes", "Sweet Treats", "Decorations"].map((tab) => (
          <button
            key={tab}
            className={`${styles.galleryTab} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            {activeTab === "All" && (
              <div
                className={styles.seeMoreOverlay}
                onClick={() => navigate(item.link)}
              >
                <span>See more</span>
                <span className={styles.arrow}>&rarr;</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {activeTab !== "All" && (
        <button className={styles.seeMoreBtn} onClick={handleClick}>
          See more on {activeTab}
        </button>
      )}
      <GalleryContent activeTab={activeTab} items={galleryItems} />
    </section>
  );
}
