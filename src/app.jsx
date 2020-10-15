import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import Search from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const logoClick = () => {
    setSelectedVideo(null);
    youtube.mostPopular().then((videos) => setVideos(videos));
  };

  //비디오가 클릭이 되면 selectVideo 호출되어 selectedVideo에 클릭한 비디오가 저장됨.
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []); // [] 으로 하면 처음에만 호출

  return (
    <div className={styles.app}>
      <Search onSearch={search} onLogoClick={logoClick} />

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
