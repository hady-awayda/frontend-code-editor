import "./style.css";
import Output from "./Output";
import Files from "../Cards/Files";
import { CODE_SNIPPETS } from "./constants";
import { Editor } from "@monaco-editor/react";
import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import downloadFile from "../../utils/downloadFile";
import downloadAllData from "../../utils/downloadAllData";
import createFile from "../../data/remote/source_codes/create";
import updateFile from "../../data/remote/source_codes/update";
import fetchSourceCodes from "../../data/remote/source_codes/read";

const CodeEditor = ({ sourceCodes }) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("main.py");
  const [selectedFileId, setSelectedFileId] = useState(0);
  const [language, setLanguage] = useState("python");
  const [index, setIndex] = useState(0);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const fetchCodes = async () => {
    const data = await fetchSourceCodes();
    setFiles(data);

    return data;
  };

  useEffect(() => {
    setFiles(sourceCodes);

    const data = fetchCodes(sourceCodes);

    if (data.length > 0) {
      setValue(data[0].code);
    }
  }, []);

  const onFileChange = (id) => {
    setIndex(id);
    setValue(files[id].code);
    setSelectedFileId(files[id].id);
  };

  const handleCodeSave = async () => {
    updateFile(selectedFileId, value);
    fetchCodes();
  };

  const addFile = async () => {
    createFile(title, value);
    fetchCodes();
  };

  const handleFileDownload = () => {
    downloadFile(files[index].title, files[index].code);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <div className=" text-white flex justify-start flex-col items-start gap-8 files-container w-72">
          <h1 className="text-4xl font-bold text-gray-200">Files</h1>
          <div className="flex flex-col items-start gap-2 w-56 overflow-y-scroll h-full">
            {files.map((file, index) => (
              <Files
                key={file.id}
                {...{ ...file, onFileChange, index }}
                isSelected={selectedFileId === file.id}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-200">Add File</h1>
          <input
            className="p-2 px-8 border-0 rounded-r-full bg-gray-200 text-black w-40"
            type="text"
            placeholder="File Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addFile}
            className="p-2 px-8 border rounded-lg run-button text-black w-40"
          >
            Add File
          </button>
        </div>
        <Box w="500px">
          <div className="flex justify-between">
            <button
              onClick={handleCodeSave}
              className="run-button action-buttons"
            >
              Upload & Save
            </button>
            <button
              onClick={handleFileDownload}
              className="run-button action-buttons"
            >
              Download File
            </button>
            <button
              onClick={() => downloadAllData(files)}
              className="run-button action-buttons"
            >
              Download All Files
            </button>
          </div>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            className="pt-4"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} w="500px" />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
