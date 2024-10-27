import React from 'react';
import mackups from  "../assets/images/image-mockups.png";

export default function Header() {
    return (
        <header id="EasyBank-header">
            <section id="EasyBank-information">
                <h1 id="EasyBank-title">
                Next generation digital banking</h1>
                <p id="EasyBank-info"> Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.
</p>
                <button className='btn-green' id="EasyBank-btn">Request Invite</button>
            </section>
            <div id="container-image">
             <img src={mackups} alt="mackups images" />
            </div>
        </header>
    )
}