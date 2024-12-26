import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios/useAxios";
import useCart from "../../../hooks/useCart/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, _id, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart()

  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log(food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} add to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch the cart update the items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login!",
        text: "Please login for add item to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, want to login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex">
      <div className="card bg-base-100 w-80 mx-auto mb-5 md:mb-0 md:w-96 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="text-center space-y-4 my-3 flex flex-col flex-1 p-4">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="flex flex-col flex-grow-0">{recipe}</p>
          </div>
          <div className="card-actions flex justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn bg-gray-200 border-b-4 border-b-yellow-400"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  item: PropTypes.node,
};
