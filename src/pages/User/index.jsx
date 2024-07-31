import "./style.css";
import Conversation from "../../components/Cards/Conversation";
import Chat from "../../components/Cards/Chat";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UserPage = ({ user, conversations }) => {
  const { id } = useParams();
  // const [id, setId] = useState(null);

  const onConversationChange = (id) => {
    setId(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{id}</h1>
      <div className="mb-4">
        <p className="text-lg">
          <strong>Name:</strong> {user?.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user?.email}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-1/3 pr-4">
          <h2 className="text-xl font-semibold mb-2">Conversations:</h2>
          <div className="">
            {conversations.map((c) => (
              <Conversation key={c.id} {...{ ...c, onConversationChange }} />
            ))}
          </div>
        </div>
        <div className="w-2/3 pl-4">
          <Chat {...{ id }} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
