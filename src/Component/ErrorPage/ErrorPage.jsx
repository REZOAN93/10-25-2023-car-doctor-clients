import { Link, useRouteError } from "react-router-dom";
import imgerror from "../../assets/Frame.png";
import Header from "../Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <Header></Header>
      <div
      id="error-page"
      className="text-center flex justify-center items-center"
    >
      <div>
        <p className=" text-red-600 text-3xl  p-10">
          <i>{error.statusText || error.message}</i>
        </p>
        <img src={imgerror} alt="" />
        <Link to={"/"}> <button className=" btn btn-outline text-red-500">Back to Home</button></Link>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
