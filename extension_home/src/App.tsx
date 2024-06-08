import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <MantineProvider>
      <Homepage />
    </MantineProvider>
  );
}

export default App;
