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

//<div className="App-header">
//<div className="App-header-menu">

//   const [isOpen, setOpen] = useState(false);
//   return ( 
//   	<nav
//       className="navbar is-primary"
//       role="navigation"
//       aria-label="main navigation"
//     >
//     <div className="container">
//       <div className="navbar-brand">
//           <a
//             role="button"
//             className={`navbar-burger burger ${isOpen && "is-active"}`}
//             aria-label="menu"
//             aria-expanded="false"
//             onClick={() => setOpen(!isOpen)}
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>
      	
//         <div className={`navbar-menu ${isOpen && "is-active"}`}>
//           <div className="navbar-start">
//             <NavLink 
//                 className="navbar-item" 
//                 activeClassName="is-active" 
//                 to="/blog">
//                 Blog
//             </NavLink>

//             <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/about"
//             >
//                 About
//             </NavLink>

//             <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/profile"
//             >
//                 Profile
//             </NavLink>
//           </div>

//           <div className="navbar-end">
//             <div className="navbar-item">
//               <div className="buttons">
//                 <a className="button is-white">Log in</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
 };
 
 export default Navbar;