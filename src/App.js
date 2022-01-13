import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VIdeoDetail';
import axios from 'axios';


let mostFrequentWords = '';
function App() {
  const KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState('ReactJS');
  const [data, setData] = useState([])
  const [currentVideo, setCurrentVideo] = useState({})
  const [currentVideoId, setCurrentVideoId] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [word, setWord] = useState([])
  const [show, setShow] = useState(false)
  let words = '';
 
  let br = 15;


  useEffect(() => {
    searchData('ReactJS')
  },[])
  const searchData = (text) => {
    setSearch(text);
  }
  useEffect(() => {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
          q: search,
          part: 'snippet',
          maxResults: 5,
          key: KEY,
      }
    }).then( (videos) => {
      const videosFiltered = filterVideos(videos.data.items);
      setData(videosFiltered);
      setCurrentVideoId(videosFiltered[0].id.videoId)
      setCurrentVideo(videosFiltered[0]);
      setIsLoading(false);
   })
    .catch(err => console.log(err))
  }, [KEY, search]);
    

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      params: {
        part: 'snippet', 
        maxResults: 100,
        textFormat: 'plainText',
        order: 'relevance',
        key: KEY,
        videoId: currentVideoId,
      }, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      
      setComments(response.data.items)
      })
      .catch(reason => {console.log(reason); return false})
  },[currentVideo] )

  useEffect(() => {
   
    words = word 
    .toString()
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}!0-9 ] /g);
    
    mostFrequentWords = mostFrequentWord(words, br).toString();

  }, [word])

 /*let longWords = word.toString()
    console.log(longWords)
    longWords = word.filter(function(str) { return str.length > 3; });
    
    setWord(longWords)*/

  useEffect(() => {
    setWord(
      comments.map((item) => {
        return item.snippet.topLevelComment.snippet.textDisplay
      })
    )
  
  }, [comments])

  const mostFrequentWord = (words = '', br = 1) => {
    let arr = words.split(' ');
    arr = arr.filter(function(str) { return str.length > 3; });
    const map = {};
    for(let i = 0; i < words.length; i++){
      if(arr[i] in map){
        map[arr[i]]++
      }else{
        map[arr[i]] = 1
      }
    }
    const arrFreq = Object.keys(map).map((key) => [key, map[key]]);
    arrFreq.sort((a, b) => b[1] - a[1]);
   return  arrFreq.slice(0, br).map((el) => el[0]);
  }
  const filterVideos = (videoList) => {
    const filteredVideo = [];

    videoList.forEach(video => {
      if(video.id.kind === 'youtube#video') {
        filteredVideo.push(video)
        
      }
    })
    return filteredVideo;
  }
 
console.log(currentVideoId)
  const changeCurrentVideo = (video) => {
    setCurrentVideo(video);
    setCurrentVideoId(video.id.videoId)
  }
  
  return (
    
    <div className="App">
     
      <SearchBar search={searchData} />
      <div className='main-div'>
        <div className='left-div' style={{float:'left'}}>
          <VideoDetail 
          currentVideo={currentVideo}
          isLoading={isLoading}
          comments={comments}
          show={show}
          setShow={setShow}
          mostFrequentWords={mostFrequentWords}
          />
           
        </div>
        <div className='right-div' style={{float:'right'}}>  
          <VideoList
          data={data}
          changeCurrentVideo={changeCurrentVideo}
          isLoading={isLoading}
          />
         

        </div>
        
      </div>
     
    </div>
  );
}

export default App;
