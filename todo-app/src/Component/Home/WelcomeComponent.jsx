import { useParams ,Link} from "react-router-dom";
import  {ApiResopnesPatVariable } from "../Api/HelloWorldApiServices";
import { useState } from "react";
function WelcomeComponent(){
    const {username}=useParams()
    const [Message ,setMessage] =useState(null);
//     function CallHelloWroldApi(){
// console.log("called")

//     ApiResopnesPatVariable(username).
//     then((respones)=>SuccessResopns(respones)).
//     catch((error)=>ErrorRespones(error)).
//     finally(()=>console.log("ok"))

//     }

//     function SuccessResopns(respones){
//         console.log(respones)
//         setMessage(respones.data.message)
//     }
//     function ErrorRespones(respones){
//         console.log(respones)
//     }
    return(
        <div className="WelcomeComponent">
   
        <h1> Welcome {username}</h1>
      <div>
        Manage Your Todos - <Link to="/Todo">Go Here!</Link>
        </div>
        <div>
        <button className="btn btn-success m-5"> call Hello World api</button>
        </div>
        <div className="text-info">{Message}</div>
        </div>
    )
}export default WelcomeComponent;