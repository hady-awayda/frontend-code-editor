const Files = ({ id, title, onFileChange, index }) => {
  const handleChange = () => {
    onFileChange(index);
  };
  return <button onClick={handleChange}>{title}</button>;
};

export default Files;
