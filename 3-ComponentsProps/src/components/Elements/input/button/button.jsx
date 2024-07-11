const Button = ({variant = "slate", name = "Test", onClick, type="button"}) => {

  const variantClasses = {
    slate: {
      base: "bg-slate-700 hover:bg-slate-800 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800",
    },
    // Add other variants here if needed
    red: {
      base: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    },
    blue: {
      base: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
    // Add more variants as needed
  };

  const classes = variantClasses[variant] || variantClasses.slate;

  return (
    <div>
      <button
        type={type}
        className={`text-white ${classes.base} font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-full mb-2 focus:outline-none transition-all duration-300 active:opacity-75`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
