import { useContext } from "react";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios/useAxios";

import { FaMoneyBill, FaUsers } from "react-icons/fa";

import { PiChefHatThin } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(data);
      return res.data;
    },
  });

  // custom path for chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
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
      <div>
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default AdminHome;
