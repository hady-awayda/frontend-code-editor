const Conversation = ({ id, name, onConversationChange }) => {
  const switchConversation = () => {
    onConversationChange(id, name);
  };

  return (
    <button onClick={switchConversation} className="conversation">
      {name}
    </button>
  );
};

export default Conversation;
