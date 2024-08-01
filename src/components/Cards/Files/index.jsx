const Files = ({ id, title, onFileChange, index, isSelected }) => {
  const handleChange = () => {
    onFileChange(index);
  };
  return (
    <button
      onClick={handleChange}
      className={`p-2 w-full text-left font-semibold px-4 ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      } rounded-lg`}
    >
      {title}
    </button>
  );
};

export default Files;
