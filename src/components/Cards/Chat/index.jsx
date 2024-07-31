import { useEffect, useState } from "react";
import fetchUserMessages from "../../../data/remote/messages/data";

const Chat = ({ id }) => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const fetchChat = async () => {
      const chat = await fetchUserMessages(id);
      setChat(chat);
      console.log(chat);
    };

    fetchChat();
  }, [id]);

  return (
    <div className="bg-gray-100 w-full p-4 rounded-lg shadow-md">
      <div className="overflow-y-auto h-96">
        {chat.map((c) => {
          console.log(c);
          return (
            <div
              key={c.id}
              className={`mb-4 p-3 rounded-lg max-w-xs ${
                c.sender_id === id
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white text-black self-start"
              }`}
            >
              {c.message}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
