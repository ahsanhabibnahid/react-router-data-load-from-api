import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id,title, body } = props.post
    
    let history = useHistory();

    function handleClick(userId) {
        history.push(`/post/${userId}`);
      }

    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Details of id {id}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                    <button onClick={() => handleClick(id)} class="btn btn-primary">Show Comments</button>
                </div>
            </div>
        </div>
    );
};

export default Post;