const LoginLabel = ({variant, text}) => {
    return (
      <label
        htmlFor={`${variant}`}
        className="block text-slate-500 text-sm font-bold mb-2"
      >
        {text}
      </label>
    );
  };
  
  export default LoginLabel