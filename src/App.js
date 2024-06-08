import React, { useEffect, useState } from "react";
import Signup from "./Allcomponent/Signup";
import Login from "./Allcomponent/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Allcomponent/Header";
import Home from "./Allcomponent/Home";
import Logout from "./Allcomponent/Logout";
import PrivateRoute from "./Allcomponent/PrivateRoute";
import Products from "./Allcomponent/Products";
import Error from "./Allcomponent/Error";

const App = () => {
  return(
      <BrowserRouter>
         <Header/>
         <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>}></Route> 
              <Route path="/Products" element={<Products/>}>Products</Route>
              <Route path="/Logout" element={<Logout/>}></Route> 
            </Route>  
              <Route path="/Signup" element={<Signup/>}></Route> 
              <Route path="/Login" element={<Login/>}></Route>  
              <Route path="/*" element={<Error/>}></Route>
         </Routes>
      </BrowserRouter>
  )
}
export default App;
