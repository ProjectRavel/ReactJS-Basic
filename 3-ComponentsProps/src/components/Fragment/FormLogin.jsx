import Button from "../Elements/input/button/button";
import IndexForm from "../Elements/input/index";

const FormLogin = () => {
  return (
    <form action="">
      <IndexForm
        text="Email"
        placeholder="example@gmail.com"
        forHTML="email"
        type="email"
        id="email"
      />
      <IndexForm
        text="password"
        placeholder="********"
        forHTML="password"
        type="password"
        id="password"
      />
      <Button variant="blue" name="Login" />
    </form>
  );
};

export default FormLogin;
