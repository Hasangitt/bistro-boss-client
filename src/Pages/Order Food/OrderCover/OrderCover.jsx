
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

const OrderCover = () => {
  return (
    <div>
      <Cover
       bg={orderCover}
       heading={"OUR SHOP"}
       subHeading={"Would you like to try a dish?"}
      ></Cover>
    </div>
  );
};

export default OrderCover;
