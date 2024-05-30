import Tower from "./02_Tower";
import PropTypes from "prop-types";
const Castle = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Castle</h2>
      <p>Message for JSD7: {message1}</p>
      <Tower message1={message1} onReply={onReply} />
    </div>
  );
};

Castle.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};
export default Castle;
