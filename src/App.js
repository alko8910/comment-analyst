import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VIdeoDetail';
//import youtube from './api/youtube';
import axios from 'axios';


function App() {
  const KEY = 'AIzaSyD6_7296drRHYaOTOolo_HRTEWogSYOZNw';
  const [search, setSearch] = useState('ReactJS');
  const [data, setData] = useState([])
  const [currentVideo, setCurrentVideo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    searchData('ReactJS')
  },[])
  const searchData = (text) => {
    setSearch(text);
    
  axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
          q: search,
          part: 'snippet',
          maxResults: 5,
          key: KEY
      }
  }).then( (videos) => {
    const videosFiltered = filterVideos(videos.data.items);
    setData(videosFiltered);
    setCurrentVideo(videosFiltered[0])
    setIsLoading(false)
  })

  .catch(err => console.log(err))
  }


  const filterVideos = (videoList) => {
    const filteredVideo = [];

    videoList.map(video => {
      if(video.id.kind === 'youtube#video') {
        filteredVideo.push(video)
      }
    })
    return filteredVideo;
  }

  const changeCurrentVideo = (video) => {
    setCurrentVideo(video);
  }
  
  return (
    
    <div className="App">
      
     <SearchBar search={searchData} />
     <VideoList
      data={data}
      changeCurrentVideo={changeCurrentVideo}
      />
     <VideoDetail 
      currentVideo={currentVideo}
      isLoading={isLoading}
      />

    </div>
  );
}

export default App;
