const Conversation = ({ id, name, onConversationChange }) => {
  const switchConversation = () => {
    onConversationChange(id);
  };

  return (
    <button onClick={switchConversation} className="conversation">
      <div>{name}</div>
    </button>
  );
};

export default Conversation;
