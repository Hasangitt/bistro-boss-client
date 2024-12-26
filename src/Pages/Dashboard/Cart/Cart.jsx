import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaCalendarAlt, FaHome, FaTrashAlt, FaWallet } from "react-icons/fa";
import { BsCalendarHeart } from "react-icons/bs";
import { MdAddShoppingCart, MdReviews } from "react-icons/md";
import useCart from "../../../hooks/useCart/useCart";
import useAxios from "../../../hooks/useAxios/useAxios";
import Swal from "sweetalert2";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";

const Cart = () => {
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxios();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 bg-yellow-600 pl-5 md:pt-28 md:h-screen">
        <h1 className="text-xl font-semibold">BISTRO BOSS</h1>
        <div className="mt-5 md:flex md:flex-col  space-y-4 pb-5 md:pb-0">
          <a>
            <Link className="flex items-center gap-2 hover:text-white">
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
          </a>
          <div className="divider lg:divider-horizontal divider-neutral"></div>
          <a>
            <Link to='/' className="flex items-center gap-2 hover:text-white">
              {" "}
              <FaHome /> Home
            </Link>
          </a>
          <a>
            <Link to='/menu' className="flex items-center gap-2 hover:text-white">
              {" "}
              <GiHamburgerMenu /> Menu
            </Link>
          </a>
          <a>
            <Link to='/order/salad' className="flex items-center gap-2 hover:text-white">
              {" "}
              <FaShop/> Shop
            </Link>
          </a>
          <a>
            <Link to='/contact' className="flex items-center gap-2 hover:text-white">
              {" "}
              <LuContactRound /> Contact
            </Link>
          </a>
        </div>
      </div>
      <div className="flex-1 px-2">
        <SectionTitle
          subHeading={"My Cart"}
          heading={"WANNA ADD MORE"}
        ></SectionTitle>
        <div className="shadow-2xl border p-2">
          <div className="flex items-center justify-around">
            <h1 className="md:text-2xl font-semibold">
              Total orders: {carts.length}
            </h1>
            <h1 className="md:text-2xl font-semibold">
              Total price: ${totalPrice}
            </h1>
            <button className="border px-8 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700">$Pay</button>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, index) => (
                    <tr key={cart._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={cart.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="font-extrabold">{cart.name}</td>
                      <td>${cart.price}</td>
                      <th>
                        <button
                          onClick={() => handleDeleteItem(cart._id)}
                          className="btn btn-ghost text-red-500 text-xl btn-xs"
                        >
                          <FaTrashAlt></FaTrashAlt>
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
