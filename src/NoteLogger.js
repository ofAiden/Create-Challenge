import { useState } from "react";

export default function NoteLogger() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  
  const Submit = () => {
    if (text.trim() !== "") {
      setNotes([...notes, text]);
      setText("");
    }
  };
  const Clear = () => {
    if (setNotes != null){
      setNotes([]);
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={(words) => setText(words.target.value)}
        placeholder="Enter note"
      />
      <button onClick={Submit}>Submit</button>
      <button onClick={Clear}>Clear</button>
      <div>
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note, index) => (
            <div key={index}>{note}</div>
          ))
        )}
      </div>
    </div>
  );
}