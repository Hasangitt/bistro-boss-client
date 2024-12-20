import { useState } from "react";
import useMenu from "../../../hooks/useMenu/useMenu";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const Pizza = () => {
  const [menu] = useMenu();
  const [showAll, setShowAll] = useState(false);
  const pizza = menu.filter((item) => item.category === "pizza");
  const sliceDessert = pizza.slice(0, showAll ? pizza.length : 4);

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
        bg={pizzaBg}
        heading={"Pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={sliceDessert} button={button}></MenuCategory>
    </div>
  );
};

export default Pizza;
