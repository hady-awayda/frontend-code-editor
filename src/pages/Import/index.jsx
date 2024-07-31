import { useState } from "react";
import sendFile from "../../data/remote/admin/post";

const BulkImport = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const result = await sendFile(file);
      setMessage("Users imported successfully!");
    } catch (error) {
      setMessage("Error uploading file. Please try again.");
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 h-5/6 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center h-60 w-96">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                CSV, XLS, XLSX (MAX. 10MB)
              </p>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".csv,.xls,.xlsx"
            />
          </label>
        </div>
        <div className="h-8">
          {file && (
            <p className="text-sm text-gray-500">Selected file: {file.name}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Bulk Import"}
        </button>
      </form>
      <div className="h-24">
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default BulkImport;
