import React from 'react';
import duckImage from './duck.svg';
import coffeeImage from './coffee.svg';
import robotImage from './robot.svg';
import './App.css';

function loadAbout() {
    return (
        <div className="content">
            <img src={duckImage} className="blogImage"  alt="rubber duck"/>
            <h2 className="blogTitle">The Rubber Duck</h2>
            <p className="blogText">In software engineering, rubber duck debugging is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different (usually) inanimate objects, or pets such as a dog or a cat. <br/><br/> Many programmers have had the experience of explaining a problem to someone else, possibly even to someone who knows nothing about programming, and then hitting upon the solution in the process of explaining the problem. In describing what the code is supposed to do and observing what it actually does, any incongruity between these two becomes apparent. More generally, teaching a subject forces its evaluation from different perspectives and can provide a deeper understanding. By using an inanimate object, the programmer can try to accomplish this without having to interrupt anyone else. </p>
            <img src={coffeeImage} className="blogImage"  alt="coffee mug with coffee"/>
            <h2 className="blogTitle">The Coffee Mug</h2>
            <img src={robotImage} className="blogImage" alt="robot head with floppy disk slot"/>
            <h2 className="blogTitle">The Robot Or Whatever You Want To Call It</h2>
        </div>
    )
}

export default loadAbout;