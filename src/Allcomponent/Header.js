import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const Header = () => {
   const navigate = useNavigate();
   const auth = localStorage.getItem("user");
   
   const Logout = () => {
      localStorage.removeItem("user");
      navigate('/Signup');
   }

    return (
     <div className="container-fluid bg-warning fs-5">
        <div className="row text-start">
            { 
         auth?<>
           <div className="col-md-1 py-3">
              <NavLink className="text-decoration-none active" to="/">Home</NavLink>
           </div>
           <div className="col-md-1 py-3">
              <NavLink className="text-decoration-none active" to="/Products">Products</NavLink>
           </div>
           <div className="col-md py-3">
              <NavLink className="text-decoration-none active" onClick={Logout} to="/Logout">Logout</NavLink>
           </div>
           <div className="col-md-1 py-3">
              <NavLink className="text-decoration-none active" to="/Admin">Admin</NavLink>
           </div>
        </>:<>
          <div className="col-md-1 py-3">
             <NavLink className="text-decoration-none active" to="/Signup">Signup</NavLink>
          </div>
         <div className="col-md py-3">
            <NavLink className="text-decoration-none active" to="/Login">Login</NavLink>
         </div>
        </>
       } 
        </div> 
     </div>
    )
}
export default Header