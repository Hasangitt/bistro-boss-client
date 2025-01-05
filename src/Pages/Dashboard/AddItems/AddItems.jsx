import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading="What's new?"
        subHeading="ADD AN ITEM"
      ></SectionTitle>
      <div className="max-w-lg mx-auto border shadow-md rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Type Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select a Category*</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full">
          <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
            <textarea
              {...register("recipe")}
              placeholder="type here"
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Submit" className="btn bg-blue-200" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
