import React from 'react';

const Article = ({title, url, _id, date, handleClick, buttonText, saved}) => (
    <div>
        <strong>{title}</strong>
        <button onClick = {() => handleClick(_id)}>
            {buttonText}
        </button>
    </div>
);

export default Article;