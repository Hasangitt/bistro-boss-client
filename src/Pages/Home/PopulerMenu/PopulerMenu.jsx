import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  const populerMenu = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-24 mx-4 md:mx-4 lg:mx-0">
        {populerMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-20">
        <button className="btn bg-gray-200 border-b-4 border-b-yellow-400">View Full  Menu</button>
        </div>
    </section>
  );
};

export default PopulerMenu;
