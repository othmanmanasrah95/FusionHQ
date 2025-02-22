import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.text();
    setMessage(data);
  };

  return (
    <div>
      <h1>FusionHQ Frontend</h1>
      <button onClick={fetchMessage}>Test Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
