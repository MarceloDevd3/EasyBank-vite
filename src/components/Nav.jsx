import React, {useState} from "react";
import logo from "../assets/images/logo.svg";
import bars from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
export default function Nav() {

    const [nav, setNav] = useState(false)
    const icon = nav ? close : bars;

    const hundleNavToggle = () => {
       setNav(prev => !prev)
    }


    return (
        <div id="navegation-row">
        <div className={nav ? 'shadow active' : 'shadow'}></div>
           
             <a href="index.html"><img src={logo} alt="Esay Bank Logo"/></a>
             <button id="nav-btn" onClick={hundleNavToggle}><img src={icon} alt="close up icon"/></button>
             <nav id="nav-container" className={nav ? 'nav active' : 'nav'}>
               <ul>
                  <li className="nav-item" ><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item" ><a className="nav-link" href="#">About</a></li>
                  <li className="nav-item" ><a className="nav-link" href="#">Contact</a></li>
                  <li className="nav-item" ><a className="nav-link" href="#">Blog</a></li>
                   <li className="nav-item" ><a className="nav-link" href="#">Careers</a></li>
               </ul>
             </nav>
             <button className="btn-green">Request Invite</button>
        </div>
    )
}