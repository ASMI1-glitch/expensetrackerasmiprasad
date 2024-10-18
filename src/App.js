import React from "react"; 
import "./App.css";

// Explicitly importing React for better clarity
import Home from "./Home";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}> {/* Added props for better control */}
      <div className="appContainer"> {/* Added a class for potential styling */}
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
