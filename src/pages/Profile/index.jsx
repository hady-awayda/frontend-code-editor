import "./style.css";
import Conversation from "../../components/Cards/Conversation";
import Chat from "../../components/Cards/Chat";
import { useState } from "react";

const Profile = ({ user, conversations }) => {
  const [id, setId] = useState("");

  const onConversationChange = (id) => {
    setId(id);
    console.log(id);
  };

  return (
    <div>
      <h1 className="">Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <div className="flex w-full">
        <div className="">
          Conversations:
          {conversations.map((c) => (
            <Conversation key={c.id} {...{ ...c, onConversationChange }} />
          ))}
        </div>
        <Chat {...{ id }} />
      </div>
    </div>
  );
};

export default Profile;
