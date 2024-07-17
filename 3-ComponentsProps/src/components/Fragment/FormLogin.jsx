import Button from "../Elements/input/button/button";
import IndexForm from "../Elements/input/index";
import { useRef, useEffect, useState} from "react";
import { postLogin } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const HandleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if(username && password) {
      // localStorage.setItem('email', email)
      // localStorage.setItem('password', password)
      // window.location.href = "/products"
      const data = {
        username: username,
        password: password,
      };
      postLogin(data, (status, res) => {
        if(status){
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("usernameDisplay", username)
          window.location.href = "/products"
        }else{
          setLoginFailed(res.response.data)
          console.log(res.response.data)
        }
      })
    }else{
      alert('Please fill all fields')
    }
  }
  const userRef = useRef(null) 

  useEffect(() => {
    userRef.current.focus()
  }, [])
  return (
    <form onSubmit={HandleLogin}>
      <IndexForm
        text="username"
        placeholder="Insert your username here..."
        forHTML="username"
        type="text"
        id="username"
        ref={userRef}
      />
      <IndexForm
        text="password"
        placeholder="********"
        forHTML="password"
        type="password"
        id="password"
      />
      <Button variant="blue" name="Login" type="submit"/>
      {loginFailed && <p className="text-red-600 text-center">{loginFailed}</p>}
    </form>
  );
};


export default FormLogin;
