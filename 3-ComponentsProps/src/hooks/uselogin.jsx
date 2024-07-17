import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [usernameDisplay, setUsernameDisplay] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
          setUsernameDisplay(getUsername(token))
        }else{
          window.location.href = '/'
        }
      }, [])

      return usernameDisplay
}