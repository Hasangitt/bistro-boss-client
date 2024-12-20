import bg from "../../../assets/home/chef-service.jpg";

const Description = () => {
  return (
    <section className="h-[500px] bg-fixed bg-no-repeat relative my-20" style={{ backgroundImage: `url(${bg})` }}>
     <div className="absolute flex  items-center inset-0 justify-center">
     <div className="text-center w-3/4 mx-auto bg-white p-8 md:p-20 space-y-4">
        <h3 className="text-4xl font-bold">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
     </div>
    </section>
  );
};
export default Description;
