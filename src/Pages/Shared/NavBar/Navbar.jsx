import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import auth from "../../Auth/firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "User LogOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser(auth).then((result) => {
          console.log(result.user);
        });
        Swal.fire({
          title: "Logout Successfully!",
          text: "User has been logout successfully.",
          icon: "success",
        }).catch((error) => [console.log(error)]);
      }
    });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  text-white dropdown-content bg-opacity-20 bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {user ? (
        <>
         <div className="navbar-end flex items-center gap-4">
         <div className="avatar">
            <div className="ring-green-500 hover:ring-red-500 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img src={user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHV8bVGK7AWg4G9gExTuR-CChkUU0G1abOg&s'}/>
            </div>
          </div>
          <div>
            <button onClick={handleLogOut} className="btn btn-outline text-white">
              Logout
            </button>
          </div>
         </div>
        </>
      ) : (
        <div className="navbar-end">
          <button className="btn btn-outline text-white">
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
