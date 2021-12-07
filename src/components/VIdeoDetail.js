
import React from 'react'

const VIdeoDetail = ({currentVideo, isLoading}) => {
    return (
        <div>
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
            </>
             )}
        </div>
    )
}

export default VIdeoDetail
