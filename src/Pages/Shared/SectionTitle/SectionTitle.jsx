import PropTypes from "prop-types";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto space-y-3 my-20">
      <p className="text-yellow-400">---{subHeading}---</p>
      <div className=" border-y-4 p-2 border-yellow-400 border-opacity-50 text-2xl font-semibold">
        <h3>{heading}</h3>
      </div>
    </div>
  );
};
export default SectionTitle;

SectionTitle.propTypes = {
  subHeading: PropTypes.node,
  heading: PropTypes.node,
};
