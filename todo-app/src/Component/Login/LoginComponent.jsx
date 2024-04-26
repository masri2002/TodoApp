
import { useNavigate  } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../Security/Authn";
function LoginComponent(){
    const authnContext=useAuth();
    const nevigate =useNavigate();
    const [username,setUsername] =useState('masri2k_')
    const [password,setPassword] =useState('123456')

    const [showErrorMessage ,setsShowErrorMessage] =useState(false)
    function handleUserNameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    function handleLoginButton(){
        if (authnContext.login(username ,password)) {        
    nevigate(`/welcome/${username}`)
}
    else {
        setsShowErrorMessage(true)
        }
        
    }
 
    return(
        <div className="Login">
          
            <h1>Time To Login</h1>
      
    {showErrorMessage &&  <div className="errorMassage">Invalid,Username Or Password</div> }
      
        <div className="LoginForm">
            <div>
                <label >User-Name</label>
                <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
            </div>
            <div>
                <label >PassWord</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleLoginButton}>Login</button>
            </div>
        </div>

        </div>
    )
}
export default LoginComponent;