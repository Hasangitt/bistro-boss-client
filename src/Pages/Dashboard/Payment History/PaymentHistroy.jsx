import { useContext } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios/useAxios";

const PaymentHistroy = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Payment History"
        subHeading="Payment"
      ></SectionTitle>
      <div className="mx-4 border p-2 shadow-md">
        <h1 className="text-3xl text-black font-semibold my-2">Total Payments:{payments.length} </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Payment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
             {payments.map((payment, index) =>  <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.transectionId}</td>
                <td>${payment.price}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistroy;
