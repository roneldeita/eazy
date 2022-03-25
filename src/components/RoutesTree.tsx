import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const RoutesTree = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RoutesTree