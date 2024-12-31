import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

import useCart from "../../../hooks/useCart/useCart";
import useAxios from "../../../hooks/useAxios/useAxios";
import Swal from "sweetalert2";

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
            <button className="border px-8 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700">
              $Pay
            </button>
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
