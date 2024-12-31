import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/Providers/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";

const useAdmin = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const { data: isAdmin } = useQuery({
    queryKey: [user.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin]
};

export default useAdmin;
