import React from "react";

import "./index.css";
import { AppProvider } from "./context/ AppContext";
import Dashboard from "./pages/ Dashboard";

const App = () => {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
};

export default App;
