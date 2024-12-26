import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/Providers/AuthContext";

const useCart = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);

  const {refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCart;
