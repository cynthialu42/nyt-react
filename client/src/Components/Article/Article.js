import React from 'react';
import moment from 'moment';

const Article = ({title, url, _id, date, handleClick, buttonText, saved}) => (
    <div className = "container">
        <div className = 'card mb-2'>
            <div className = 'card-body'>
                <h5 className = 'card-title'>
                    <a href = {url} target = '_blank'><strong>{title}</strong></a>
                </h5>
                <p className = 'card-text'>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <button className = 'btn btn-dark' onClick = {() => handleClick(_id)}>
                    {buttonText}
                </button>
            </div>
        </div>
    </div>
);

export default Article;