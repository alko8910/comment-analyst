
import React from 'react'

const VIdeoDetail = ({currentVideo, isLoading}) => {
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
                </div>
            </>
             )}
        </div>
    )
}

export default VIdeoDetail
