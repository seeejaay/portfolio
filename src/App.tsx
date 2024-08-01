import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "./components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

function App() {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div className="bg-obsidian flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-8">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-lg text-white ">
          Edit <code className="font-bold">src/App.tsx</code> and save to
          reload.
        </p>
        <Button className="bg-blueish hover:bg-light" onClick={handleClick}>
          Learn React
        </Button>
        {showAlert && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle className="font-bold">Alert Title</AlertTitle>
            <AlertDescription>{"Button Clicked"}</AlertDescription>
          </Alert>
        )}
      </header>
    </div>
  );
}

export default App;
