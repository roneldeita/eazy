import React, {ReactElement, FC, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './Navbar'
import Navbar from "./Navbar";

interface Props {
  children: object
}

const Layout: FC<Props> = ({children}): ReactElement =>{
  return(
    <>
      <Navbar/>
      {children}
     </>
  );
};

export default Layout;