import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/darkMode";

const AuthLayouts = ({ title, children, type }) => {
  const [isDarkMode, setIsDarkMode] = useContext(DarkMode);
  console.log(isDarkMode)
  return (
    <div className={`flex justify-center h-screen items-center ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="w-full max-w-md">
        <h1 className="text-3xl mb-2 font-bold text-blue-600 text-center">{title}</h1>
        <p className="font-medium text-slate-500 mb-8 text-center">
          Welcome, Please enter your details
        </p>
        {children}
        <PageConditional condition={type} />
      </div>
    </div>
  );
};

function PageConditional({ condition }) {
  return (
    <p className="text-center mt-2">
      {condition === "login" ? (
        <>
          Don&apos;t have an account yet?{" "}
          <Link to="/register" className="font-bold text-blue-500 hover:opacity-80">
            Sign up
          </Link>
        </>
      ) : (
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-500 hover:opacity-80">
            Sign in
          </Link>
        </>
      )}
    </p>
  );
}

export default AuthLayouts;
