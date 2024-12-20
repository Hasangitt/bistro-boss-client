import { useState } from "react";
import useMenu from "../../../hooks/useMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const Soups = () => {
    const [menu] = useMenu();
  const [showAll, setShowAll] = useState(false);
  const soup = menu.filter((item) => item.category === "soup");
  const sliceDessert = soup.slice(0, showAll ? soup.length : 4);

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
        bg={soupBg}
        heading={"Soup"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory items={sliceDessert} button={button}></MenuCategory>
    </div>
  );
};

export default Soups;