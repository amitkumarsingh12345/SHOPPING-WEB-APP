import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [auth, setAuth] = useState(null);
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: "",
      password: ""
   }); 

   const userHandler = event => {
      setUser({...user,[event.target.name]: event.target.value});
   }

   const loginHandler = async event => {
      event.preventDefault();
      const data = await axios.post('http://localhost:11000/login',user);
      JSON.stringify(data.data.name)?localStorage.setItem("user",JSON.stringify(data)):alert("User Not Found");
      setAuth(localStorage.getItem("user"));
      auth? navigate('/'): navigate('/Signup'); 
   }
   
   return(
    <div className="container w-25 bg-info p-3 mt-auto">
    <div>
         <form onSubmit={loginHandler}>
             <div>
                 <input type="email" name="email" 
                 value={user.email} placeholder="Enter User Email" 
                 onChange={userHandler}/>
             </div>
             <div>
                 <input type="password" name="password" 
                 value={user.password} placeholder="Enter User Password" 
                 onChange={userHandler}/>
             </div>
             <div>
                 <input type="submit" value="Login"/>
             </div>
         </form>
    </div>
 </div>
   )
}
export default Login;