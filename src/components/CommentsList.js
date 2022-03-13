import React from 'react'
import Comment from './Comment'
const CommentsList = ({comments}) => {
   
    return (
        <div>
            {comments?.map((item) => (
                <Comment 
                className='commentsDiv' 
                key={item.id}
                text = {item.snippet.topLevelComment.snippet.textDisplay}
                likes = {item.snippet.topLevelComment.snippet.likeCount}
                auth = {item.snippet.topLevelComment.snippet.authorDisplayName}
                image = {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                time = {item.snippet.topLevelComment.snippet.publishedAt}
                />
            ))} 
        </div>
    )
}

export default CommentsList
