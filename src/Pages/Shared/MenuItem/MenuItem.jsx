import PropTypes from "prop-types";


const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-4 m-8 ">
            <img className="w-[100px]" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div className="space-y-2">
                <h1 className="text-2xl">{name}-------</h1>
                <p className="text-gray-300">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.node
}