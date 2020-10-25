import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./video_detail.module.css";

const VideoDetail = memo(({ video, video: { snippet }, onSearch }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(`${snippet.tags}`);
    console.log(items);
  }, []);

  const convertComba = (num) => {
    let result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
  };

  const convertNumber = (num) => {
    let result = "";
    if (num >= 100000000) {
      result = parseInt(num / 100000000).toString() + "억";
    } else if (num >= 10000) {
      result = parseInt(num / 10000).toString() + "만";
    } else if (num >= 1000) {
      result = parseInt(num / 1000).toString() + "천";
    } else {
      result = convertComba(num);
    }
    return result;
  };

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
        {snippet.tags && snippet.tags.map((tag, index) => tagAdd(tag, index))}
      </ul>
      <h2 className={styles.title}>{snippet.title}</h2>
      <div className={styles.statistic}>
        <div className={styles.static__left}>
          <p className={styles.viewCount}>
            조회수 {convertComba(`${video.statistics.viewCount}`)}회
          </p>
          <p className={styles.viewDay}> •{snippet.publishedAt.slice(0, 10)}</p>
        </div>
        <div className={styles.static__right}>
          <ul className={styles.actions}>
            <li>
              <button>
                <i className="active fas fa-thumbs-up"></i>
                <span className={styles.action}>
                  {convertNumber(`${video.statistics.likeCount}`)}
                </span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-thumbs-down"></i>
                <span className={styles.action}>
                  {convertNumber(`${video.statistics.dislikeCount}`)}
                </span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-share"></i>
                <span className={styles.action}>공유</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-plus"></i>
                <span className={styles.action}>저장</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fab fa-font-awesome-flag"></i>
                <span className={styles.action}>신고</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <h5 className={styles.channel}>{snippet.channelTitle}</h5>

      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
});

export default VideoDetail;
