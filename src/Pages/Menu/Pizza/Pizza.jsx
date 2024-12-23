
import useMenu from "../../../hooks/useMenu/useMenu";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const Pizza = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
 

  return (
    <div>
      <Cover
        bg={pizzaBg}
        heading={"Pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={pizza} title='pizza'></MenuCategory>
    </div>
  );
};

export default Pizza;
