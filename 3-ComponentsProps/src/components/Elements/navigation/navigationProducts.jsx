const NavigationProduct = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              VelsProject
            </span>
          </a>
          <div className="flex items-center">
            <span className="text-md font-bold text-gray-500 hover:underline cursor-pointer mx-2">{`${
              localStorage.getItem("email").split("@")[0]
            }`}</span>
            <form onSubmit={logout}>
              <button
                type="submit"
                className="text-sm bg-blue-500 px-4 py-1.5 text-white rounded-full hover:underline"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
export default NavigationProduct;
