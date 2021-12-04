import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VIdeoDetail';
//import youtube from './api/youtube';
import axios from 'axios';


function App() {
  const KEY = 'AIzaSyD1PiC2FQHZagnPYJ1fyaaeoSFGoqlREsI';
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])

  const searchData = (text) => {
    setSearch(text);
    
  axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
          q: search,
          part: 'snippet',
          maxResults: 5,
          key: KEY
      }
  }).then( videos => {
    setData(videos.data.items);
  })

  .catch(err => console.log(err))
  }

  return (
    
    <div className="App">
      
     <SearchBar search={searchData} />
     <VideoList />
     <VideoDetail />

    </div>
  );
}

export default App;
