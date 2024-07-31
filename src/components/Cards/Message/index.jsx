import { useState } from "react";
import send from "../../../data/remote/messages/create";

const Input = ({ id }) => {
  const [text, setText] = useState("");

  const sendMessage = () => {
    send(id, text);
  };

  return (
    <div className="flex mt-8 w-full gap-6 h-full">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-100 text-gray-800 font-semibold w-full max-h-full h-16 p-4 rounded-lg shadow-md"
      />
      <button onClick={sendMessage} className="run-button rounded-2xl">
        Send
      </button>
    </div>
  );
};

export default Input;
