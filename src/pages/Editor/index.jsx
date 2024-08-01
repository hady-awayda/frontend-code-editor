import "./style.css";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CodeEditor from "../../components/CodeEditor";

function Editor() {
  const sourceCodes = useSelector((state) => state.data.sourceCodes);

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor {...{ sourceCodes }} />
    </Box>
  );
}

export default Editor;
