import React, { memo } from "react";
import styles from "./video_detail.module.css";

const VideoDetail = memo(({ video, video: { snippet }, onSearch }) => {
  const tagAdd = (tag, index) => {
    if (index > 2) {
      return null;
    }
    return (
      <li
        key={index}
        className={styles.tag}
        onClick={() => {
          onSearch(tag);
        }}
      >
        #{tag}
      </li>
    );
  };

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <ul className={styles.ul}>
        {snippet.tags.map((tag, index) => tagAdd(tag, index))}
      </ul>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3 className={styles.channel}>{snippet.channelTitle}</h3>

      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
});

export default VideoDetail;
