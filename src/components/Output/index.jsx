import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { executeCode } from "../../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setOutput(["An error occurred while running the code."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-container">
      <button
        className={`run-button ${isLoading ? "loading" : ""}`}
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div className={`output-box ${isError ? "error" : ""}`}>
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

// Define prop types for the Output component
Output.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.shape({
      getValue: PropTypes.func.isRequired, // Validate that getValue is a function
    }).isRequired,
  }).isRequired, // Validate that editorRef is required
  language: PropTypes.string.isRequired, // Validate that language is a required string
};

export default Output;
