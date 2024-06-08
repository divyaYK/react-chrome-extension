import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import MainPopup from "./pages/MainPopup";

function App() {
  return (
    <MantineProvider>
      <MainPopup />
    </MantineProvider>
  );
}

export default App;
