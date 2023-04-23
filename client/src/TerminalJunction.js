import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import TileComponent from "./TileComponent";
import HistoryComponent from "./HistoryComponent";

function TerminalJunction({ socket, username, room }) {
  const [defaultPath, setDefaultPath] = useState("~/dgk/.ssh");
  const [commandHistory, setCommandHistory] = useState([]);
  const [outputHistory, setOutputHistory] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div style={{
      width: "500px",
      height: "400px",
      background: "#2220202c",
      border: "1px solid #ffffff",
      padding: "10px",
      borderRadius: "10px",
    }}>
      <ScrollToBottom >
        <HistoryComponent pathAddress={defaultPath} commandHistory={commandHistory} outputHistory={outputHistory} />
        <TileComponent 
          pathAddress={defaultPath} 
          commandHistory={commandHistory} 
          setCommandHistory={setCommandHistory}
          outputHistory={outputHistory} 
          setOutputHistory={setOutputHistory}
        />
      </ScrollToBottom>
    </div>
  );
}

export default TerminalJunction;
