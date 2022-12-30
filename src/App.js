import { useEffect, useState } from "react";
import "./App.css";
import { Letter } from "./Letter";
import { Content } from "./Content";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="App">
      {(!showLetter && <Letter setShowLetter={setShowLetter}></Letter>) || (
        <Content />
      )}
    </div>
  );
}

export default App;
