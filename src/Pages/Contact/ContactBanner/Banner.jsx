import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/contact/banner.jpg'

const Banner = () => {
    return (
        <div>
          <Cover
          bg={banner}
          heading={'CONTACT US'}
          subHeading={'Would you like to try a dish?'}
          ></Cover>
        </div>
    );
};

export default Banner;