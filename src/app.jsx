import React from "react";
import { useState,useEffect } from 'react';
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list"
import Search from './components/video_search/video_search'

function App() {
  const [videos,setVideos]=useState([]);
  
  useEffect( () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD246ZkNrfVgVPpNrs0OoFtX4gbNmz7DrQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])  // [] 으로 하면 처음에만 호출


  return (
    <div className={styles.app}>
    <Search />
    <VideoList videos={videos}/>
  </div>);
}

export default App;
