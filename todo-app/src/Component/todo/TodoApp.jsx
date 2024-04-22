
import "./TodoApp.css"
import { useState } from "react"
import { BrowserRouter ,Link,Route,Routes,useNavigate,useParams  } from "react-router-dom"


export default function TodoApp  () {
  return (
    <div className="TodoApp">
     
        {/* Todo management application app */}
        <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
        <Route path='/' element={ <LoginComponent/>}></Route>
            <Route path='/login' element={ <LoginComponent/>}></Route>
            <Route path='/welcome/:username' element={ <WelcomeComponent/>}></Route>
            <Route path='/Todo' element={ <ListTodoComponent/>}></Route>
            <Route path='/logout' element={ <LogoutComponent/>}></Route>
            <Route path='*' element={ <ErrorMessage/>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
        </BrowserRouter>
       

    </div>
  )
}

function LoginComponent(){
    const nevigate =useNavigate();
    const [username,setUsername] =useState('masri2k_')
    const [password,setPassword] =useState('123456')
    const [showScussesMessage ,setsShowScussesMessage] =useState(false)
    const [showErrorMessage ,setsShowErrorMessage] =useState(false)
    function handleUserNameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    function handleLoginButton(){
        if (username === 'masri2k_' && password === '123456') {
            
    setsShowScussesMessage(true)
    setsShowErrorMessage(false)        
    nevigate(`/welcome/${username}`)
}
    else {setsShowErrorMessage(true)
        setsShowScussesMessage(false)}
        
    }
 
    return(
        <div className="Login">
          
            <h1>Time To Login</h1>
          {showScussesMessage &&  <div className="seccusesMessage" >Welcome To Todo Management App</div>}
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

function WelcomeComponent(){
    const {username}=useParams()
    
    return(
        <div className="WelcomeComponent">
   
        <h1> Welcome {username}</h1>
      Manage Your Todos - <Link to="/Todo">Go Here!</Link>
   
        </div>
    )
}
function ErrorMessage(){
    return(
        <div className="ErrorComponent">
            <h1>We Are Working Really Hard</h1>
            <div>
                Apologies For Error 404 .  Reach out to me at <span style={{color :'red'}}>ahmadmmasrri1@gmail.com</span> 
            </div>
        </div>
    )
}
function ListTodoComponent(){
    const today =new Date();
    const targetDate=new Date(today.getFullYear()+12 ,today.getMonth() ,today.getDay())
    const todos=[
        {id:1 ,description:"Learn Aws" ,done:false , targetDate:targetDate},
        {id:2 ,description:"Learn DevOps", done:false , targetDate:targetDate},
        {id:3 ,description:"Learn FullStack", done:false , targetDate:targetDate}
]
    return(
        <div className="container">
           
            <h1>Things You Want Todo</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID:</td>
                            <td>DESCRIPTION:</td>
                            <td>IS DONE:</td>
                            <td>DATE:</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                            todo=>(<tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>))
                        
}
                    </tbody>
                </table>
            </div>
     
        </div>
    )
}
function HeaderComponent(){
    return(
        <div className="Header">
       <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.google.com">TodoApp</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/Todo">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </div>
    )
}
function FooterComponent(){
    return(
        <div className="Footer">
           <div className="container">
            Your Footer 
           </div>
        </div>
    )
}
function LogoutComponent(){
    return(
        <div className="logout">
            <h1>You Are Loged Out !</h1>
            <div>
                Thanks For Using My Application , Comeback Soon :{")"}
            </div>
        </div>
    )
}