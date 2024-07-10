import AuthLayouts from "../components/layout/AuthLayout";
import FormRegister from "../components/Fragment/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
