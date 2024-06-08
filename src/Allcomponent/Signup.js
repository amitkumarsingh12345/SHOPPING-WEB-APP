import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: ""
    });
    
    useEffect( () => {
        const auth = localStorage.getItem("user");
        if(auth) {
            navigate('/');
        }
    })
    const userHandler = event => {
        setUser({...user,[event.target.name]: event.target.value});
    }

    const submitHandler = async event => {
        event.preventDefault(); 
        const data = await axios.post('http://localhost:11000/postapi',user);
        if(data) {
              console.log(JSON.stringify(data));
            localStorage.setItem("user",JSON.stringify(data));
            navigate('/')
        }
    }
    useEffect( () => {
        const auth = localStorage.getItem("user");
        if(auth) {
            navigate('/');
        }
    })
    return(
        <div className="container w-25 bg-info p-3 mt-auto">
           <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type="text" name="name" 
                        value={user.name} placeholder="Enter User Name" 
                        onChange={userHandler}/>
                    </div>
                    <div>
                        <input type="password" name="password" 
                        value={user.password} placeholder="Enter User Password" 
                        onChange={userHandler}/>
                    </div>
                    <div>
                        <input type="email" name="email" 
                        value={user.email} placeholder="Enter User Email" 
                        onChange={userHandler}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
           </div>
        </div>
    )
}
export default Signup;