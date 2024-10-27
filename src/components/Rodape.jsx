import React from 'react';
import logo from "../assets/images/logo.svg";

export default function Rodape() {
    return (
        <footer id="rodape">
           <div id="rodape-row">
              <img src={logo} alt="logo"/>
              <div id="icon-rows">
                <div className="icon">
                <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div className="icon">
                <i class="fa-brands fa-square-youtube"></i>
                </div>                
                <div className="icon">
                <i class="fa-brands fa-twitter"></i>
                </div>  
                <div className="icon">
                <i class="fa-brands fa-pinterest"></i>
                </div>
                <div className="icon">
                <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
           </div>
           <div id="footer-nav-container">
              <ul id="grid-container">
                <li className="nav-item"><a className="nav-link" href="">About Us</a></li>
                
                <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
                
                <li className="nav-item"><a className="nav-link" href="">Blog</a></li>
                
                <li className="nav-item"><a className="nav-link" href="">Careers</a></li>
                
                <li className="nav-item"><a className="nav-link" href="">Support</a></li>
                <li className="nav-item"><a className="nav-link" href="">Privacy Policy</a></li>
              </ul>
           </div>
           <div id="footer-final-content">
             <button className="btn-green">Request Invite</button>
             <p><small id="copyright">
             © Easybank. All Rights Reserved</small></p>
           </div>
        </footer>
    )
}