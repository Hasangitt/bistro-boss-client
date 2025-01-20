import { useContext } from "react";
import { AuthContext } from "../../Auth/Providers/AuthContext";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <h1 className="text-3xl text-black font-bold">
          <span>Hi, Welcome</span>{" "}
          <span>{user?.displayName ? user?.displayName : "Back"}</span>
        </h1>
      </div>
    </div>
  );
};

export default UserHome;
