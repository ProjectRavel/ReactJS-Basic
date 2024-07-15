import Button from "../Elements/input/button/button";
import IndexForm from "../Elements/input/index";
import { useRef, useEffect} from "react";

const FormLogin = () => {
  const HandleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if(email && password) {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      window.location.href = "/products"
    }else{
      alert('Please fill all fields')
    }
  }
  const emailRef = useRef(null) 

  useEffect(() => {
    emailRef.current.focus()
  }, [])
  return (
    <form onSubmit={HandleLogin}>
      <IndexForm
        text="Email"
        placeholder="example@gmail.com"
        forHTML="email"
        type="email"
        id="email"
        ref={emailRef}
      />
      <IndexForm
        text="password"
        placeholder="********"
        forHTML="password"
        type="password"
        id="password"
      />
      <Button variant="blue" name="Login" type="submit"/>
    </form>
  );
};


export default FormLogin;
