import img1 from "../../assets/images/login/login.svg";
import logoimg1 from "../../assets/bx_bxl-facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoimg2 from "../../assets/bx_bxl-linkedin.png";
import logoimg3 from "../../assets/google1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../Customhooks/useAuth";

const Login = () => {
  // const { userGoogleLogin, signInWithEmail } = useContext(AuthContext);
  const { userGoogleLogin, signInWithEmail } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const provider = new GoogleAuthProvider();

  const handleLogInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully LogIn",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    userGoogleLogin(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero-content grid grid-cols-2 justify-between ">
        <div className="text-center lg:text-left w-full h-[500px]">
          <img className=" w-full h-[500px]" src={img1} alt="" />
        </div>
        <div className="card w-8/12 mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleLogInUser} className=" px-8 pt-6 rounded-lg">
            <h1 className=" text-center font-bold text-4xl mb-3">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  <input type="checkbox" name="remember me" id="" />
                  <span className="ms-3">Remember Me</span>
                </p>
              </label>
              <span
                onClick={() => setshowPassword(!showPassword)}
                className=" cursor-pointer absolute right-5 top-12 text-2xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error ? (
              <>
                <p className=" text-red-600 text-sm text-center">{error}</p>
              </>
            ) : (
              ""
            )}
            <div className="form-control mt-3">
              <button className="btn bg-[#FF3811] text-white text-xl capitalize">
                Sign In
              </button>
            </div>
          </form>
          <div className="mb-5 space-y-3 mt-5 text-center">
            <p>Or Sign In with</p>
            <div className=" flex text-center items-center justify-center gap-5">
              <img className=" p-2 btn btn-circle" src={logoimg1} alt="" />
              <img className=" p-2 btn btn-circle" src={logoimg2} alt="" />
              <img
                onClick={handleGoogleLogin}
                className=" p-2 btn btn-circle"
                src={logoimg3}
                alt=""
              />
            </div>
            <p>
              Don't Have an account?{" "}
              <span>
                {" "}
                <Link to={"/signup"}>
                  <span className=" text-[#FF3811] font-bold">Sign Up</span>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
