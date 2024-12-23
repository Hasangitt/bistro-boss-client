import useMenu from "../../../hooks/useMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";


const Dessert = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
 

  return (
    <div>
      <Cover
        bg={dessertBg}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory 
      items={dessert} 
      title='dessert'></MenuCategory>
    </div>
  );
};

export default Dessert;
