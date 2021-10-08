import React from 'react';

const Comments = (props) => {
    const { name, email, body } = props.comment
    return (
        <div className="card col-md-4" style={{ width: "18rem" }}>
            <div class="card-body">
                <h5 className="card-title">Comment by : {name}</h5>
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
};

export default Comments;