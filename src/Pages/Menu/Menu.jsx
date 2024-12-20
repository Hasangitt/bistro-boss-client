import { Helmet } from "react-helmet-async";
import MenuCover from "./MenuCover/MenuCover";
import Offer from "./TodayOffer/Offer";
import Dessert from "./Dessert/Dessert";
import Pizza from "./Pizza/Pizza";
import Salads from "./Salads/Salads";
import Soups from "./Soups/Soups";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <MenuCover></MenuCover>
      <Offer></Offer>
      <Dessert></Dessert>
      <Pizza></Pizza>
      <Salads></Salads>
      <Soups></Soups>
    </div>
  );
};

export default Menu;
