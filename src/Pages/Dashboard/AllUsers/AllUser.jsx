import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name}  is now an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"All Users"}
          heading={"All Users"}
        ></SectionTitle>
      </div>
      <div>
        <div className="shadow-2xl border p-2">
          <h1 className="md:text-2xl font-semibold my-4">
            Total Users: {users.length}
          </h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>

                      <td className="font-extrabold">{user.name}</td>
                      <td className="font-extrabold">{user.email}</td>
                      <td className="font-extrabold">
                       { user.role === 'admin' ? 'Admin' : <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn bg-orange-500 text-white btn-ghost text-xl btn-xs"
                        >
                          <FaUsers></FaUsers>
                        </button>}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDeleteUser(user)}
                          className="btn btn-ghost text-red-500 text-xl btn-xs"
                        >
                          <FaTrashAlt></FaTrashAlt>
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
