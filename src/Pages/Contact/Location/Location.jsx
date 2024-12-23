import { FiPhoneCall } from "react-icons/fi";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";

const Location = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Visit Us"}
        heading={"OUR LOCATION"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 place-items-center gap-5">
        <div className="w-[380px] h-[300px] border">
          <div className="bg-[#D1A054] h-[80px] w-[380px] content-center">
            <div className="text-2xl flex justify-center">
              <FiPhoneCall></FiPhoneCall>
            </div>
          </div>
          <div className="bg-gray-200 h-[200px] mx-4 text-center flex flex-col justify-center">
            <h3 className="text-xl text-black mb-2">PHONE</h3>
            <p className="text-black">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-[380px] h-[300px] border">
          <div className="bg-[#D1A054] h-[80px] w-[380px] content-center">
            <div className="text-2xl flex justify-center">
              <SlLocationPin />
            </div>
          </div>
          <div className="bg-gray-200 h-[200px] mx-4 text-center flex flex-col justify-center">
            <h3 className="text-xl text-black mb-2">ADDRESS</h3>
            <p className="text-black">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-[380px] h-[300px] border">
          <div className="bg-[#D1A054] h-[80px] w-[380px] content-center">
            <div className="text-2xl flex justify-center">
            <MdOutlineAccessTime />
            </div>
          </div>
          <div className="bg-gray-200 h-[200px] mx-4 text-center flex flex-col justify-center">
            <h3 className="text-xl text-black mb-2">WORKING HOURS</h3>
            <p className="text-black">
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
