import useMenu from "../../../hooks/useMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import { useState } from "react";

const Dessert = () => {
  const [menu] = useMenu();
  const [showAll, setShowAll] = useState(false);
  const dessert = menu.filter((item) => item.category === "dessert");
  const sliceDessert = dessert.slice(0, showAll ? dessert.length : 4);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const button = (
    <>
      <button onClick={handleShowAll}>
        {showAll ? "Show Less" : "Watch More"}
      </button>
    </>
  );

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
      items={sliceDessert} 
      button={button}></MenuCategory>
    </div>
  );
};

export default Dessert;
