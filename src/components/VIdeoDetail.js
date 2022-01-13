
import React from 'react'
import CommentsList from './CommentsList'
const VIdeoDetail = ({currentVideo, isLoading, comments,show, setShow, mostFrequentWords}) => {
    const words = `Most frequent words are ${mostFrequentWords}`
    return (
        <div className='iframe-div'>
                { isLoading ?  (
               'Video is Loading'
           ) : (
            <>
                <iframe
                    width='500px'
                    height = '300px'
                    src = {`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
                    title={currentVideo.id.videoId}
                    
                 />
                <h5>{currentVideo.snippet.title}</h5>
                <div className='h6-div'>
                <h6>{currentVideo.snippet.description}</h6>
                <button onClick={() => setShow(!show)}>Analyze comments</button>
                        <div>
                         {show && words}
                        </div>
                </div>
            </>
            
             )}
              <CommentsList
                  comments={comments}
             />
        </div>
    )
}

export default VIdeoDetail
