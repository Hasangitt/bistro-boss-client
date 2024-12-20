import { useEffect, useState } from "react";
import ChefRecoCard from "../../Shared/ChefRecoCard/ChefRecoCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const ChefRecommend = data.filter((item) => item.category === "drinks");
        setMenu(ChefRecommend);
      });
  }, []);

  return (
    <section>
        <SectionTitle
        subHeading='Should Try'
        heading='CHEF RECOMMENDS'
        ></SectionTitle>
      <div className="md:flex gap-5 justify-center mb-20">
        {menu.map((item) => (
          <ChefRecoCard key={item._id} item={item}></ChefRecoCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
