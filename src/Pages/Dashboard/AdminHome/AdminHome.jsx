import { useContext } from "react";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios/useAxios";

import { FaMoneyBill, FaUsers } from "react-icons/fa";

import { PiChefHatThin } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data = {}} = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(data)
      return res.data
    }
  });
  return (
    <div className="flex flex-col mx-8 my-4 space-y-4">
      <div>
        <h1 className="text-3xl text-black font-bold">
          <span>Hi, Welcome</span>{" "}
          <span>{user?.displayName ? user?.displayName : "Back"}</span>
        </h1>
      </div>
      <div className="stats border shadow-md mt-2 ">
        <div className="flex stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="stat-figure text-3xl text-white">
            <FaMoneyBill />
          </div>
          <div className="text-white">
            <div className="stat-value">${data.revenue}</div>
            <div className="">Revenue</div>
          </div>
        </div>
        <div className="flex stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="stat-figure text-3xl text-white">
            <FaUsers />
          </div>
          <div className="text-white">
            <div className="stat-value">{data.users}</div>
            <div className="">Customers</div>
          </div>
        </div>
        <div className="flex stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="stat-figure text-3xl text-white">
            <PiChefHatThin />
          </div>
          <div className="text-white">
            <div className="stat-value">{data.menuItems}</div>
            <div className="">Menu Items</div>
          </div>
        </div>
        <div className="flex stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="stat-figure text-3xl text-white">
            <GrDeliver />
          </div>
          <div className="text-white">
            <div className="stat-value">{data.orders}</div>
            <div className="">Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
