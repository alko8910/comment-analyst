import React from 'react'

const VideoItem = ({video, changeCurrentVideo}) => {
    console.log(video)

    return (
        <div key={video.id.videoId} onClick={() => changeCurrentVideo(video)}>
            <img 
            src={video.snippet.thumbnails.high.url}
            />
            <h4>{video.snippet.title}</h4>
        </div>
    )
}

export default VideoItem
