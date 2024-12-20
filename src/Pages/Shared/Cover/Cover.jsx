import PropTypes from "prop-types";

const Cover = ({bg, heading, subHeading}) => {
  return (
    <div
      className="hero h-screen md:h-[400px]"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      
      <div className="md:hero-content text-white text-center">
        <div className="bg-black w-[350px] md:w-[600px] p-10 bg-opacity-60">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">
           {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;

Cover.propTypes = {
    bg: PropTypes.node,
    heading: PropTypes.node,
    subHeading: PropTypes.nod
}