import { forwardRef } from 'react';

const InputLogin = forwardRef(({ type, placeholder, id }, ref) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-75 shadow-md hover:shadow-lg hover:shadow-slate-300 mb-6 transition-all duration-300"
      id={id}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

// Setting the display name for better debugging
InputLogin.displayName = 'InputLogin';

export default InputLogin;
