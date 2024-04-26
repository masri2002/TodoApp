
import "./TodoApp.css"

import { BrowserRouter ,Navigate,Route,Routes  } from "react-router-dom"
import LogoutComponent from "../Logout/LogoutComponent"
import LoginComponent from "../Login/LoginComponent"
import WelcomeComponent from "../Home/WelcomeComponent"
import ErrorMessage from "../Errors/ErrorComponent"
import ListTodoComponent from "../ListTodo/ListTodoComponent"
import HeaderComponent from "../Header&Footer/HeaderComponent"
import FooterComponent from "../Header&Footer/FooterComponent"
import AuthnProvider, { useAuth } from "../Security/Authn"

function AuthenticatedRoute({children}){
    const authnContext =useAuth()
    if(authnContext.isAuth)
    return children
    else
    return <Navigate to="/" />
  }
export default function TodoApp  () {
  
    return (
    <div className="TodoApp">
     
        {/* Todo management application app */}
        <AuthnProvider>
        <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
        <Route path='/' element={ <LoginComponent/>}></Route>
            <Route path='/login' element={ <LoginComponent/>}></Route>
            <Route path='/welcome/:username' element={ 
            <AuthenticatedRoute>
            <WelcomeComponent/>
            </AuthenticatedRoute>}></Route>
            <Route path='/Todo' element={  <AuthenticatedRoute><ListTodoComponent/></AuthenticatedRoute>}></Route>
            <Route path='/logout' element={ <LogoutComponent/>}></Route>
            <Route path='*' element={ <ErrorMessage/>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
        </BrowserRouter>
        </AuthnProvider>

    </div>
  )
}


