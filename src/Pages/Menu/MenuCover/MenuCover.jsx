import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg'

const MenuCover = () => {
    return (
        <div>
            <Cover
      bg={menuBg}
      heading={'OUR MENU'}
      subHeading={'Would you like to try a dish?'}
      ></Cover> 
        </div>
    );
};

export default MenuCover;