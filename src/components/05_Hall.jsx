import Corridor from "./06_Corridor";
import PropTypes from "prop-types";
const Hall = ({message1,onReply}) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Hall</h2>
      <p>Message for JSD7: {message1}</p>
      <Corridor message1={message1} OnReply={onReply} />
    </div>
  );
};

Hall.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Hall;
