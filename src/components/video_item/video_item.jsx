import React, { memo } from 'react';
import styles from './video_item.module.css';

// props.video.snippet ~~ 인데 아래 방식으로 {video: {snippet}}으로 사용 가능.
const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const videoType = display === 'list' ? styles.video_list : styles.video_grid;
  const thumType = display === 'list' ? styles.thum_list : styles.thum_grid;
  const metaType = display === 'list' ? styles.meta_list : styles.meta_grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={`${styles.video} ${videoType}`}>
        <img className={`${styles.thumbnail} ${thumType}`} src={snippet.thumbnails.medium.url} alt="video thumbnail"></img>
        <div className={`${styles.metadata} ${metaType}`}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
