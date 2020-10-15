import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import Search from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const logoClick = useCallback(() => {
    setSelectedVideo(null);
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  //비디오가 클릭이 되면 selectVideo 호출되어 selectedVideo에 클릭한 비디오가 저장됨.
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  //useCallback을 쓰는 이유는 memo를 써도 props가 발생하기에 rerender가 된다.
  // 이를 방지하고자 useCallback을 써서 바뀔때만 render되게 한다.
  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]); // [] 으로 하면 처음에만 호출

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
