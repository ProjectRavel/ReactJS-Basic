import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.statusText || error.message)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-5xl text-slate-700">
        <h1 className="font-bold">Oops!</h1>
        <p className="">Sorry, an unexpected error has occured</p>
        <p className="font-medium">404 </p>
      </div>
    </div>
  );
};

export default ErrorPage;
