import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Featured/Featured";
import Description from "./PageDescription/Description";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Description></Description>
          <PopulerMenu></PopulerMenu>
          <CallUs></CallUs>
          <ChefRecommend></ChefRecommend>
          <Featured></Featured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;