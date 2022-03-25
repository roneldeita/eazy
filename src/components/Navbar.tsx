import React from "react";
import "./Navbar.css"

function Navbar(){
  return(
    <div className="navbar-fixed">
      <nav className="nav-center">
        <div className="nav-wrapper">
          <ul>
            <li className="activ"><a href="/">Home</a></li>
            <li><a href="/">Policy</a></li>
            <li><a href="/">Earn</a></li>
            <li><a href="/">Spend</a></li>
            <li className="activ"><a href="/">Account</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar