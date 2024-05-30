import SecretRoom from "./09_SecretRoom";
import PropTypes from "prop-types";
const Nook = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Nook</h2>
      <p>Message for JSD7: {message1}</p>
      <SecretRoom message1={message1} onReply={onReply} />
    </div>
  );
};

Nook.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Nook;
