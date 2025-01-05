import { Link, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { MdAddShoppingCart, MdReviews } from "react-icons/md";
import { BsCalendarHeart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../../../hooks/useAdmin/useAdmin";

const DashHome = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-1/4 bg-yellow-600 pl-5 pt-28 h-screen">
        <h1 className="text-xl font-semibold">BISTRO BOSS</h1>
        <div className="mt-5 md:flex md:flex-col  space-y-4 pb-5 md:pb-0">
          {isAdmin ? (
            <>
              <a>
                <Link to='/dashboard/adminHome' className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaHome /> Admin Home
                </Link>
              </a>
              <a>
                <Link to='/dashboard/addItems' className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <ImSpoonKnife /> Add Items
                </Link>
              </a>
              <a>
                <Link to='/dashboard/manageItems' className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaList /> Manage Items
                </Link>
              </a>
              <a>
                <Link
                  to="/dashboard/manageBookings"
                  className="flex items-center gap-2 hover:text-white"
                >
                  {" "}
                  <FaBook /> Manage Bookings
                </Link>
              </a>
              <a>
                <Link  to="/dashboard/allusers" className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaUsers /> All Users
                </Link>
              </a>
            </>
          ) : (
            <>
              {" "}
              <a>
                <Link to='/dashboard/userHome' className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaHome /> User Home
                </Link>
              </a>
              <a>
                <Link className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaCalendarAlt /> Reservation
                </Link>
              </a>
              <a>
                <Link className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <FaWallet /> Payment history
                </Link>
              </a>
              <a>
                <Link
                  to="/dashboard/cart"
                  className="flex items-center gap-2 hover:text-white"
                >
                  {" "}
                  <MdAddShoppingCart /> My cart
                </Link>
              </a>
              <a>
                <Link className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <MdReviews /> Add review
                </Link>
              </a>
              <a>
                <Link className="flex items-center gap-2 hover:text-white">
                  {" "}
                  <BsCalendarHeart /> My booking
                </Link>
              </a>{" "}
            </>
          )}
          {/* ********************** divider *********************** */}
          <div className="divider lg:divider-horizontal divider-neutral"></div>
          <a>
            <Link to="/" className="flex items-center gap-2 hover:text-white">
              {" "}
              <FaHome /> Home
            </Link>
          </a>
          <a>
            <Link
              to="/menu"
              className="flex items-center gap-2 hover:text-white"
            >
              {" "}
              <GiHamburgerMenu /> Menu
            </Link>
          </a>
          <a>
            <Link
              to="/order/salad"
              className="flex items-center gap-2 hover:text-white"
            >
              {" "}
              <FaShop /> Shop
            </Link>
          </a>
          <a>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-white"
            >
              {" "}
              <LuContactRound /> Contact
            </Link>
          </a>
        </div>
      </div>
      <div className="flex-1">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashHome;
