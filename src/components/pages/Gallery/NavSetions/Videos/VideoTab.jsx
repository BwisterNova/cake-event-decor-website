import { useState } from "react";
// eslint-disable-next-line no-unused-vars
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
const video16 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767181306/VID_20251114_173915_vbzjuk.mp4";
const video17 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196608/94c7fdc7ee0e4db5b571ebe03405956a_1_dj3r0d.mp4";
const video18 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767181317/6a054df9-bbb2-41e4-8b22-ce696bf28a2e-watermark_nzozyc.mp4";
const video19 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196721/7559b6d4f5624c2ba05547bb432d4397_x3pa2l.mp4";
const video20 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196721/c5c243f8-33c4-4049-b829-4aba43f9091f-watermark_fvzquk.mp4";
const video21 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196695/VID_20251130_090149_t8jdvw.mp4";
const video22 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196623/245945d5-5910-4ecf-a9b7-7f090f054899-watermark_pdt309.mp4";
const video23 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1767196681/0f5e4270d1b24cb58aeb46938ae07542_mmjbis.mp4";
const video24 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1769628622/VID-20260125-WA0040_xbchor.mp4";
const video25 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1769628624/VID-20260125-WA0041_hl6syv.mp4";
const video26 =
  "https://res.cloudinary.com/diwmaqpd8/video/upload/v1769628627/VID-20260125-WA0042_up2sfo.mp4";

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
    {
      id: 14,
      src: video16,
      alt: "Videos",
    },
    {
      id: 15,
      src: video17,
      alt: "Videos",
    },
    {
      id: 16,
      src: video18,
      alt: "Videos",
    },
    {
      id: 17,
      src: video19,
      alt: "Videos",
    },
    {
      id: 18,
      src: video20,
      alt: "Videos",
    },
    {
      id: 19,
      src: video21,
      alt: "Videos",
    },
    {
      id: 20,
      src: video22,
      alt: "Videos",
    },
    {
      id: 21,
      src: video23,
      alt: "Videos",
    },
    {
      id: 22,
      src: video24,
      alt: "Videos",
    },
    {
      id: 23,
      src: video25,
      alt: "Videos",
    },
    {
      id: 24,
      src: video26,
      alt: "Videos",
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
              playsInline
              className={styles.video}
              alt={video.alt}
              loading="lazy"
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
