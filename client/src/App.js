import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "layouts/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
