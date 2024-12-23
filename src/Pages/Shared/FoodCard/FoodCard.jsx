import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
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
          <button className="btn bg-gray-200 border-b-4 border-b-yellow-400">
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
