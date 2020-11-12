import React from 'react';
import robotImage from '../robot.svg';
// import '../App.css';

const Blog = () => {
    return (
        <div className="content">
            <img src={robotImage} className="blogImage" alt="robot head with floppy disk slot"/>
            <h2 className="blogTitle">The Robot</h2>
            <p className="blogText">Robots are cool.</p>
        </div>
    )
}

export default Blog;