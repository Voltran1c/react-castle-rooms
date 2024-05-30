import Gallery from "./07_Gallery";
import PropTypes from "prop-types";
const Corridor = ({message1,onReply}) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2>Corridor</h2>
      <p>Message for JSD7: {message1}</p>
      <Gallery message1={message1} OnReply={onReply} />
    </div>
  );
};

Corridor.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Corridor;
