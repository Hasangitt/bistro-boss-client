import { Link } from "react-router-dom";
import img from "../../assets/404.gif";
const Error = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-lg mx-auto">
        <img className="mx-auto justify-center" src={img} alt="" />
        <Link to='/' className="flex justify-center"><button className="btn bg-blue-200 hover:bg-blue-100">Back To Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
