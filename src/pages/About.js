import React from 'react';
import duckImage from '../duck.svg';
import coffeeImage from '../coffee.svg';
import robotImage from '../robot.svg';
// import '../App.css';

const About = () => {
    return (
        <div className="content">
            <img src={duckImage} className="blogImage"  alt="it's a rubber duck"/>
            <h2 className="blogTitle">The Rubber Duck</h2>
            <p className="blogText">In software engineering, rubber duck debugging is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different (usually) inanimate objects, or pets such as a dog or a cat.</p>
            <img src={coffeeImage} className="blogImage"  alt="a coffee mug with coffee maybe spilling a little"/>
            <h2 className="blogTitle">The Coffee Mug</h2>
            <p className="blogText">Sweet bean juice.</p>
            <img src={robotImage} className="blogImage" alt="robot head with floppy disk slot"/>
            <h2 className="blogTitle">The Robot</h2>
            <p className="blogText">Robots are cool.</p>
        </div>
    )
}

export default About;