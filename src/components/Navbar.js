import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";

import logofront from '../vectorwellforce_logofront.svg';
import logo from '../vectorwellforce_logotext.svg';
import logoback from '../vectorwellforce_logoback.svg';

const Navbar = () => {
    const [ scrolled, setScrolled ] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 1){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['App-header-menu'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }

    return (
        <div className="App-header">
            <div className={navbarClasses.join(" ")}>
                <div className="Logo">
                    <img src={logoback} className="App-logo" alt="logo" />
                    <img src={logo} className="App-logo-text" alt="logo" />
                    <img src={logofront} className="App-logo" alt="logo" />
                </div>
                <div className="Navigation">
                    <NavLink className="NavButton" to="/blog">Blog</NavLink>
                    <NavLink className="NavButton" to="/about">About</NavLink>
                </div>
            </div>
        </div>
    );
 };
 
 export default Navbar;