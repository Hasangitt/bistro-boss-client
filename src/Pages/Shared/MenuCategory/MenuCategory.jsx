import PropTypes from "prop-types";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-24 mx-4 md:mx-4 lg:mx-0">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-20">
        <Link to={`/order/${title}`}>
          <button className="btn bg-gray-200 border-b-4 border-b-yellow-400">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

MenuCategory.propTypes = {
  items: PropTypes.node,
  button: PropTypes.node,
  title: PropTypes.node
};
