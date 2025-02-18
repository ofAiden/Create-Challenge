import { useState } from "react";

export default function Logger() {
  const [text, setText] = useState("");
  const [logs, setLogs] = useState([]);
  
  const Submit = () => {
    if (text.trim() !== "") {
      setLogs([...logs, text]);
      setText("");
    }
  };
  const Clear = () => {
    if (setLogs != null){
      setLogs([]);
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={(words) => setText(words.target.value)}
        placeholder="Enter log message"
      />
      <button onClick={Submit}>Submit</button>
      <button onClick={Clear}>Clear</button>
      <div>
        {logs.length === 0 ? (
          <p>No logs yet</p>
        ) : (
          logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))
        )}
      </div>
    </div>
  );
}
