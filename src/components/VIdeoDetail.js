
import React from 'react'

const VIdeoDetail = ({currentVideo, isLoading}) => {
    return (
        <div>
                { isLoading ?  (
               'Video is Loading'
           ) : (
               <>
            <iframe
                 src = {`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
                    title={currentVideo.id.videoId}
                    
                />
                <h3>{currentVideo.snippet.title}</h3>
                </>
             )}
        </div>
    )
}

export default VIdeoDetail
