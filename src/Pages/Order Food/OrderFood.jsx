import { Helmet } from "react-helmet-async";
import FoodTabs from "./FoodTabs/FoodTabs";
import OrderCover from "./OrderCover/OrderCover";


const OrderFood = () => {
    return (
        <div>
               <Helmet>
                    <title>Bistro Boss || Order Food</title>
                  </Helmet>
           <OrderCover></OrderCover>
           <FoodTabs></FoodTabs>
        </div>
    );
};

export default OrderFood;