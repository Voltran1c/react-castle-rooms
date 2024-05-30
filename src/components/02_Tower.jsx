import Chamber from "./03_Chamber";
import PropTypes from "prop-types";
const Tower = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Tower</h2>
      <p>Message for JSD7: {message1}</p>
      <Chamber message1={message1} onReply={onReply} />
    </div>
  );
};

Tower.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Tower;
