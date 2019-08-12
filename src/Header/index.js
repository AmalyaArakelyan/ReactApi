import React from "react";
import { Link } from "react-router-dom"
import Item from "../Articles/Item";

const Header = () => {
    return (
       <div className="header">
           <img src='/images/header.jpg' />
           <h1>
               <Link to="/">
                   React App
               </Link>

           </h1>
       </div>
    );
};

export default Header;