import { useEffect, useState } from "react";
import { retriveAlltodos ,deletetodo } from "../Api/HelloWorldApiServices";

function ListTodoComponent(){
    const today =new Date();
    const [message ,setMessage]=useState(null);
    const targetDate=new Date(today.getFullYear()+12 ,today.getMonth() ,today.getDay())
const [todos ,setTodos] =useState([])
function getTodos(){
    retriveAlltodos('masri2k_').
    then(respones =>{setTodos(respones.data)}).
    catch(error =>console.log(error))
    }
    useEffect (() => getTodos() , [])
    function deleteTodo(id){
        deletetodo("masri2k_" , id).then(
            respones => {setMessage(`Todo with id ${id} Deleted `)
                         getTodos()    
            }).
        catch(error=>console.log(error))
    }
return(
        <div className="container">
           
            <h1>Things You Want Todo</h1>
            <div>
                {message &&<div className="alert alert-warning">{message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>DESCRIPTION:</th>
                            <th>IS DONE:</th>
                            <th>DATE:</th>
                            <th>Delete:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                            todo=>(<tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>

                            </tr>))
                        
}
                    </tbody>
                </table>
            </div>
     
        </div>
    )
}
export default ListTodoComponent;