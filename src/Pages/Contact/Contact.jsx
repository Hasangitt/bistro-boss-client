import { Helmet } from "react-helmet-async";
import Banner from "./ContactBanner/Banner";
import Form from "./Form/Form";
import Location from "./Location/Location";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Contact</title>
      </Helmet>
      <Banner></Banner>
      <Location></Location>
      <Form></Form>
    </div>
  );
};

export default Contact;
