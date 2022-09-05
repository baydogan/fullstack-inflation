import { ChakraProvider } from "@chakra-ui/react";
import { useRoutes } from "react-router-dom";
import routes from "routes/index";
import Navbar from "layouts/Navbar";

function App() {
  const showRoutes = useRoutes(routes);

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <>
         {showRoutes}
        </>
      </div>
    </ChakraProvider>
  );
}

export default App;
