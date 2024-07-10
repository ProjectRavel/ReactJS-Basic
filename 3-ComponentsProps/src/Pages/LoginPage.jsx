import AuthLayouts from "../components/layout/AuthLayout";
import FormLogin from "../components/Fragment/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
