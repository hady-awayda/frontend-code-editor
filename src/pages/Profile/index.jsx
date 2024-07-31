import "./style.css";
import Conversation from "../../components/Cards/Conversation";
import Chat from "../../components/Cards/Chat";
import { useState, useEffect } from "react";
import Input from "../../components/Cards/Message/index";

const Profile = ({ user, conversations }) => {
  const [id, setId] = useState(conversations[0]?.id);
  const [name, setName] = useState(conversations[0]?.name || "John Doe");

  const onConversationChange = (id, name) => {
    setId(id);
    setName(name);
  };

  useEffect(() => {
    if (conversations.length > 0) {
      setId(conversations[0].id);
      setName(conversations[0].name);
    }
  }, [conversations]);

  return (
    <div className="container flex w-full mx-auto p-4 justify-between">
      <div className="w-80">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Name:</strong> {user?.name}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-2">Conversations</h2>
        <div className="mt-4 w-full pr-4 gap-1 flex flex-col">
          {conversations.map((convo) => (
            <Conversation
              key={convo.id}
              {...{ ...convo, onConversationChange }}
            />
          ))}
        </div>
      </div>
      <div className="w-full ml-32 mt-4 h-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10">{name}</h2>
        <Chat {...{ id }} />
        <Input {...{ id }} />
      </div>
    </div>
  );
};

export default Profile;
