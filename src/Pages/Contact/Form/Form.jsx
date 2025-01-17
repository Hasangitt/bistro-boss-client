
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { GrSend } from "react-icons/gr";

const Form = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Send Us a Message"}
        heading={"CONTACT FORM"}
      ></SectionTitle>
      <form className="space-y-5 bg-gray-100 content-center mx-auto md:w-4/5 p-10 mb-24">
        <div className="md:flex items-center md:gap-5 space-y-5 md:space-y-0">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="input input-bordered input-md w-full"
        />
        <textarea
          placeholder="Write your message here"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        <div className="flex mx-auto justify-center items-center gap-2 text-white px-8 font-semibold rounded-md text-center bg-gradient-to-r from-yellow-500 to-yellow-800 w-[200px] p-2">
          <Link className="flex items-center gap-2"><input type="submit" value="Send Message" className="cursor-pointer bg-transparent border-none" />
          <GrSend /></Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
