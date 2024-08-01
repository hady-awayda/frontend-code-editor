import { useEffect, useState } from "react";
import fetchUserMessages from "../../../data/remote/messages/read";

const Chat = ({ id, messages }) => {
  const [chat, setChat] = useState([]);

  const fetchChat = async () => {
    const chat = await fetchUserMessages(id);

    setChat(chat);
  };

  useEffect(() => {
    fetchChat();
  }, [id, refresh]);

  return (
    <div className="bg-gray-100 w-full p-4 rounded-lg shadow-md">
      <div className="overflow-y-scroll chatbox-container pr-4 flex flex-col items-start">
        {chat.map((c) => (
          <div
            key={c.id}
            className={`mb-4 p-2 px-4 rounded-lg w-60 ${
              c.sender_id == id
                ? "bg-cyan-200 text-black font-semibold self-end"
                : "bg-white text-black font-semibold"
            }`}
          >
            {c.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
