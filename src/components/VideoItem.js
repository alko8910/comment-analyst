import React from 'react'

const VideoItem = ({video, changeCurrentVideo}) => {
    console.log(video)
    console.log(video)
    return (
        <div key={video.id.videoId} onClick={() => changeCurrentVideo(video)}>
            <img 
            src={video.snippet.thumbnails.medium.url}
            
            />
            <h5>{video.snippet.title}</h5>
        </div>
    )
}

export default VideoItem
