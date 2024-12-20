import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featureBg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured text-white bg-fixed">
      <div className="px-20 bg-black bg-opacity-50">
        <div className="pt-10">
          <SectionTitle
            subHeading="Check it out"
            heading="FROM OUR MENU"
          ></SectionTitle>
        </div>
        <div className="md:flex gap-10 pb-28 items-center">
          <img className="w-[300px]" src={featureBg} alt="" />
          <div className="space-y-2">
            <p className="text-xl"> March 20, 2023 WHERE CAN I GET SOME? </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
