import PropTypes from "prop-types";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, button }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-24 mx-4 md:mx-4 lg:mx-0">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-20">
        <button className="btn bg-gray-200 border-b-4 border-b-yellow-400">
          {button}
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;

MenuCategory.propTypes = {
  items: PropTypes.node,
  button: PropTypes.node,
};
