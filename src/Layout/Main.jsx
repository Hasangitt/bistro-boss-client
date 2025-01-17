import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = ["login", "signUp"].some((path) =>
    location.pathname.includes(path)
  );

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
