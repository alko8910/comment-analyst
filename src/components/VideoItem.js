import React from 'react'

const VideoItem = ({video, changeCurrentVideo}) => {
    
    return (
        <div key={video.id.videoId} onClick={() => changeCurrentVideo(video)}>
            <img 
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <h5>{video.snippet.title}</h5>
           
        </div>
    )
}

export default VideoItem
