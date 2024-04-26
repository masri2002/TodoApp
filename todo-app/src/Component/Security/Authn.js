import { createContext, useContext, useState } from "react";

export const AuthnContext = createContext();
export const useAuth =()=> useContext(AuthnContext)

function AuthnProvider({ children }) {
  const [isAuth ,setAuth]=useState(false);
   
  function login(username ,password){
    if(username==='masri2k_' && password==='123456'){
        setAuth(true)
        return true;
    }else{
        setAuth(false)
        return false
    }
   
}
function logout(){
    setAuth(false)
}

   return (
       <AuthnContext.Provider value={{isAuth ,login ,logout }}>
           {children}
       </AuthnContext.Provider>
   );
}

export default AuthnProvider;
