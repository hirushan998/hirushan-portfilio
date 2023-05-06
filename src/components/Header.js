import React from "react";
import Logo from '../assets/Logo.png';

const Header = () => {
    return(
      <header className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="">
              <img src={Logo} alt=""/>
            </a>
            <button className="btn btn-sm ">Resume</button>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header; 