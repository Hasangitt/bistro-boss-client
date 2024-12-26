import { useEffect, useState } from "react";
import image from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../Auth/Providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [disabled, setDisable] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const userValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          draggable: true,
        });
        console.log(result.user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4e38/4d11/b068cd862e966bd80016bce98e0c320c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXpRUfjrajjUQuXvA5w7kYJ2CMeF15~XoIVVg5RKklfBRxdN~6HH-blvYhL~Pr~61OiE6bglA184SydzdZg98sjDoMvrw9-o2hnYURCWKMV~1EhfiJ-lMHrcR1o1UUe354DWADrXsBXB4xrzT2N~2lCJDw8Widq8UP~lDYSqN3PxW6hPf21~kImnGoUuAumi3-EPw3hvFp2GKV3NbhxxVzs3tTYI0A0C7Ag8785BM0B25eP9VGKniq-wHJ6IGVqI5PJj1710zznqnw45LtRXB1euOCfNzxfjGbda2QQzW~fA9XLbg6Ajqb7izOvhuU91NgiXfb0GGQ7s6ZVDb6s97Q__')`,
        }}
        className="hero bg-base-200 min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={image} alt="" className="w-[200px] md:w-full" />
          </div>
          <div className="card  w-full max-w-md shrink-0">
            <h1 className="text-5xl text-center mt-8 font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={userValidCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  onClick={userValidCaptcha}
                  className="btn btn-outline mt-2"
                >
                  Valid Captcha
                </button> */}
              </div>
              <div className="mt-5">
                <p className="text-yellow-600 text-center font-semibold">
                  New in this website?{" "}
                  <Link className="text-blue-500" to="/signUp">
                    Go to Sign Up
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  disabled={disabled}
                  className="btn text-white bg-yellow-700"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
