import img1 from "../../assets/images/login/login.svg";
import logoimg1 from "../../assets/bx_bxl-facebook.png";
import logoimg2 from "../../assets/bx_bxl-linkedin.png";
import logoimg3 from "../../assets/google1.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { userLoginWithEmail } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleLoginWithMail = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    userLoginWithEmail(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero-content grid grid-cols-2 justify-between ">
        <div className="text-center lg:text-left w-full">
          <img className=" w-full h-[500px]" src={img1} alt="" />
        </div>
        <div className="card w-8/12 mx-auto  shadow-2xl bg-base-100">
          <form
            onSubmit={handleLoginWithMail}
            className=" px-8 pt-6 rounded-lg"
          >
            <h1 className=" text-center font-bold text-4xl mb-1">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-5">
              <button className="btn bg-[#FF3811] text-white text-xl capitalize">
                Sign In
              </button>
            </div>
          </form>
          <div className="mb-5 space-y-3 mt-5 text-center">
            <p>Or Sign Up with</p>
            <div className=" flex text-center items-center justify-center gap-5">
              <img className=" p-2 btn btn-circle" src={logoimg1} alt="" />
              <img className=" p-2 btn btn-circle" src={logoimg2} alt="" />
              <img className=" p-2 btn btn-circle" src={logoimg3} alt="" />
            </div>
            <p>
              Already have an account?{" "}
              <span>
                {" "}
                <Link to={"/login"}>
                  <span className=" text-[#FF3811] font-bold">Log In</span>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
