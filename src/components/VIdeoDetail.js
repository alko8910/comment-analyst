import React from "react";
import CommentsList from "./CommentsList";
const VIdeoDetail = ({
  currentVideo,
  isLoading,
  comments,
  show,
  setShow,
  mostFrequentWords,
}) => {
  
  let words = (mostFrequentWords ? `Most frequent words are: ${mostFrequentWords}` : 'Video has no comments')

  return (
    <div className="iframe-div">
      {isLoading ? (
        "Video is Loading"
      ) : (
        <>
          <iframe
            width="500px"
            height="300px"
            src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
            title={currentVideo.id.videoId}
          />
          <h5>{currentVideo.snippet.title}</h5>
          <div className="h6-div">
            <h6>{currentVideo.snippet.description}</h6>
            <button onClick={() => setShow(!show)}>Analyze comments</button>
            <p>{show && ` Most frequent words are: `}</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {show &&
          mostFrequentWords.map((item, i) => {
            return (
              <p
                style={{ border: "1px solid black", width: "32%", margin: "1px" }} key={i}>
                {item}
              </p>
            );
          })}
      </div>
          </div>
        </>
      )}
      <CommentsList comments={comments} />
    </div>
  );
};

export default VIdeoDetail;
