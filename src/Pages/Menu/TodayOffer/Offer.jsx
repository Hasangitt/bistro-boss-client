import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Offer = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <SectionTitle
      subHeading={'Do not miss'}
      heading={'TODAY iS OFFER'}
      ></SectionTitle>
      <MenuCategory items={offered} button={'Order Your Favourite Food'}></MenuCategory>
    </div>
  );
};

export default Offer;
