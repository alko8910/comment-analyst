import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ data, isLoading, changeCurrentVideo}) => {
  return (
    <div>
      {isLoading
        ? "videos are loading"
        : data.map((data) => (
            <VideoItem
            
              key={data.id.videoId}
              video={data}
              changeCurrentVideo={changeCurrentVideo}
            
            />
          ))}
    </div>
  );
};

export default VideoList;
