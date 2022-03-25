import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './Navbar'
import Navbar from "./Navbar";

function Layout({children}:{children:object}){
  return(
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout;