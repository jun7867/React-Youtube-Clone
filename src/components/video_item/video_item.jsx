import React from 'react';
import styles from './video_item.module.css'

// props.video.snippet ~~ 인데 아래 방식으로 {video: {snippet}}으로 사용 가능.
const VideoItem = ({video: {snippet}}) => {
    return (
        <li className={styles.container}>
            <div className={styles.video}>
                <img  
                    className={styles.thumbnail} 
                    src={snippet.thumbnails.medium.url} 
                    alt="video thumbnail">       
                </img>
                <div className={styles.metadata}>
                    <p className={styles.title} >{snippet.title}</p>
                    <p className={styles.channel} >{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
}


export default VideoItem;