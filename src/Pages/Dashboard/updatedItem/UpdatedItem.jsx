import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_imgbb;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatedItem = () => {
  const {name, price, recipe, category, _id} = useLoaderData();
 
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to the imgbb and then get a url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      // now send the item to the server
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        // show pop up
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} modified to database successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle subHeading="Updated" heading="Updated Item"></SectionTitle>
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
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select a Category*</span>
              </label>
              <select
              defaultValue={category}
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
                placeholder="price here"
                defaultValue={price}
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
              placeholder="type details here"
              defaultValue={recipe}
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <input
              {...register("image")}
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

export default UpdatedItem;
