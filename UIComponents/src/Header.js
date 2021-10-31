import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {

  let Auth;
  let UserName;
  

 
 UserName = sessionStorage.getItem("Sales_Name");

 

  Auth = sessionStorage.getItem("auth");
 


  
 
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-light">
        <ul className="navbar-nav">
        <li>
          {Auth
          ?(<Link className="nav-link" to="/logout">Logout</Link>)
          :(<Link className="nav-link" to="/newlogin">Login</Link>)
          }
        </li>
        </ul>
        <label id="userName">{UserName}</label>
      </nav>
      
    </div>
  );
 
};

