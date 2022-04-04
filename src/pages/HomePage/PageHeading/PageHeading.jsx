import React from 'react';
import './title-home-page.css';

const PageHeading = ({title, description, imgUrl}) => {
    return (
        <div className="title-home-page">
            <img src={imgUrl} alt="head" className="title-item" />
            <div className="title-text">
                <h1 className="title-name">{title}</h1>
                <p className="title-descr">{description}</p>
            </div>
        </div>
    );
}

export default PageHeading;