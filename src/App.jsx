import { useState } from "react";
import Castle from "./components/01_Castle";

function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  };
  const message1 = "คุณฮัก React บ่?";
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p>Message for JSD7: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Castle message1={message1} onReply={handleReply} />
    </div>
  );
}
export default App;
