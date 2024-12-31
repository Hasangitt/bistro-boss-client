import { useContext } from "react";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const GoogleSignUp = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
       const userInfo = {
        email: result.user.email,
        name: result.user.displayName
       }
       axiosPublic.post('/users', userInfo)
       .then(res => {
        console.log(res.data)
        if (res.data) {
            Swal.fire({
              title: "Sign Up!",
              text: "User Sign Up Successfully.",
              imageUrl:
                "https://www.inturact.com/hubfs/From-Sign-up-to-Success-6-User-Onboarding-Best-Practices.jpg",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            });
            navigate("/");
          }
       })
       .catch()
      })
      .catch((error) => {
        console.log(error);
       
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-block border border-black"
      >
        <FcGoogle className="text-xl" />
        Sign Up With Google
      </button>
    </div>
  );
};

export default GoogleSignUp;
