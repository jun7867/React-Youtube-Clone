import React from "react";
import { useState,useEffect } from 'react';
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list"
import Search from './components/video_search/video_search'

function App( {youtube}) {
  const [videos,setVideos]=useState([]);
  const search = query => {
    youtube.search(query)
    .then(videos=> setVideos(videos));
  };
  useEffect( () => {
    youtube.mostPopular()
    .then(videos=> setVideos(videos))
  },[])  // [] 으로 하면 처음에만 호출


  return (
    <div className={styles.app}>
    <Search 
      onSearch={search}/>
    <VideoList videos={videos}/>
  </div>);
}

export default App;
