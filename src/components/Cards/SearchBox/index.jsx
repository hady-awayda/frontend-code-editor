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
        className="p-3 px-8 border-0 w-96 h-11 rounded-full bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
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
        <div className="absolute mt-2 w-full text-black bg-white rounded-md shadow-lg max-h-60 overflow-auto z-10 flex flex-col gap-2">
          {results.map((result, index) => (
            <div
              key={index}
              className="border-b border-gray-300 px-4 py-2 pl-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link to={`/user/${result.id}`}>{result.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
