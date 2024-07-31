import "./style.css";

import CodeEditor from "../../components/CodeEditor";
import { Box } from "@chakra-ui/react";
function Editor({ sourceCodes }) {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor {...{ sourceCodes }} />
    </Box>
  );
}

export default Editor;
