import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostComments = () => {
    const {postId} = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const {title, body} = post


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postId])

    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Details of id {postId}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                </div>
            </div>
            <div className="row">
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>
        
        </div>
    );
};

export default PostComments;