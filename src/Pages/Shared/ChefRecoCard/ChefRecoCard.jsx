import PropTypes from "prop-types";

const ChefRecoCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-80 mx-auto mb-5 md:mb-0 md:w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="text-center space-y-4 my-3">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-gray-200 border-b-4 border-b-yellow-400">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecoCard;

ChefRecoCard.propTypes = {
  item: PropTypes.node,
};
