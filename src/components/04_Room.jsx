import Hall from "./05_Hall";
import PropTypes from "prop-types";
const Room = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Room</h2>
      <p>Message for JSD7: {message1}</p>
      <Hall message1={message1} onReply={onReply} />
    </div>
  );
};

Room.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Room;
