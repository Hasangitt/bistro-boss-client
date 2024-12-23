
import useMenu from "../../../hooks/useMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import saladBg from "../../../assets/menu/salad-bg.jpg";

const Salads = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  
  return (
    <div>
      <Cover
        bg={saladBg}
        heading={"Salads"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={salad} title="salad"></MenuCategory>
    </div>
  );
};

export default Salads;
