import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import styles from "./Styles/videos.module.css";
import VideoModal from "./VideoModal";
//The videos
const video1 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438717/video1_lqmiku.mp4";
const video2 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438953/video2_jgkrig.mp4";
const video3 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438741/video3_whwfye.mp4";
const video4 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438691/video4_sf35hw.mp4";
const video5 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438672/video5_zg3bxe.mp4";
const video6 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438734/video6_gaji5m.mp4";
const video7 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438713/video7_mymeqx.mp4";
const video8 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438748/video8_qj2q39.mp4";
const video9 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438835/video9_ddmxeg.mp4";
const video12 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438931/video12_d1mc6f.mp4";
const video13 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438824/video13_tumfk2.mp4";
const video14 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438938/video14_sir58g.mp4";
const video15 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1755438746/video15_uuxuql.mp4";

export default function VideoTab() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  //Some videos of the work
  const videos = [
    {
      id: 1,
      src: video1,
      alt: "Videos",
      title: "Wedding Event",
    },

    {
      id: 2,
      src: video2,
      alt: "Videos",
      title: "Birthday Events",
    },

    {
      id: 3,
      src: video3,
      alt: "Videos",
      title: "Birthday Cake",
    },

    {
      id: 4,
      src: video4,
      alt: "Videos",
      title: "Wedding Event",
    },

    {
      id: 5,
      src: video5,
      alt: "Videos",
      title: "Party Event",
    },

    {
      id: 6,
      src: video6,
      alt: "Videos",
      title: "Setting Up an Event",
    },

    {
      id: 7,
      src: video7,
      alt: "Videos",
      title: "Wedding Event",
    },

    {
      id: 8,
      src: video8,
      alt: "Videos",
      title: "Outdoor Event",
    },

    {
      id: 9,
      src: video9,
      alt: "Videos",
      title: "Birthday Event",
    },

    {
      id: 10,
      src: video12,
      alt: "Videos",
      title: "Wedding Event",
    },

    {
      id: 11,
      src: video13,
      alt: "Videos",
      title: "Bible Cake",
    },

    {
      id: 12,
      src: video14,
      alt: "Videos",
      title: "Birthday Cake",
    },

    {
      id: 13,
      src: video15,
      alt: "Videos",
      title: "Birthday Cake",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Videos</h2>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedVideo(video)}
          >
            <video
              src={video.src}
              loop
              muted
              autoPlay
              playsInline
              className={styles.video}
              alt={video.alt}
            />
            <div className={styles.title}>{video.title}</div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
