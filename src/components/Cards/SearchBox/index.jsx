import { useState, useEffect, useRef } from "react";
import search from "../../../data/remote/search/read";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSearch = async () => {
    if (value.length > 1) {
      const searchResults = await search(value);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <input
        className="p-3 px-8 border-0 w-96 h-11 rounded-full bg-gray-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg max-h-80 overflow-auto z-10 flex flex-col">
          {results.map((result, index) => (
            <Link
              to={`/user/${result.id}`}
              key={index}
              className="flex items-center border-b border-gray-300 px-4 py-2 pl-4 h-20 hover:border-none hover:bg-gray-900 cursor-pointer text-xl text-gray-700 font-medium"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
