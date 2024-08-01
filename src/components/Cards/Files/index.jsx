const Files = ({ id, title, onFileChange, index, isSelected }) => {
  const handleChange = () => {
    onFileChange(index);
  };
  return (
    <button
      onClick={handleChange}
      className={`p-2 w-10/12 text-left font-semibold px-4 rounded-r-full ${
        isSelected ? "bg-cyan-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {title}
    </button>
  );
};

export default Files;
