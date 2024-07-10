import Button from "../Elements/input/button/button";
import IndexLogin from "../Elements/input/index";

const FormRegister = () => {
  return (
    <form action="">
      <IndexLogin
        text="Fullname"
        placeholder="Insert your name here"
        forHTML="fullname"
        type="text"
        id="fullname"
      />
      <IndexLogin
        text="Email"
        placeholder="example@gmail.com"
        forHTML="email"
        type="email"
        id="email"
      />
      <IndexLogin
        text="Password"
        placeholder="********"
        forHTML="password"
        type="password"
        id="password"
      />
      <IndexLogin
        text="Confirm Password"
        placeholder="********"
        forHTML="confirmPassword"
        type="password"
        id="confirmPassword"
      />
      <Button variant="blue" name="Register" />
    </form>
  );
};

export default FormRegister;
