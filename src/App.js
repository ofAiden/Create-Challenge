import './App.css';
import {useState} from 'react';
import NoteLogger from './NoteLogger';
import ClickLogger from './ClickLogger';
import ToggleSymptom from './ToggleSymptom';

function App() {
  //Which things were experienced today
  const dailyStats = [
    { type: "Tired", experiencedToday: true},
    { type: "Headache", experiencedToday: true},
    { type: "Exercised", experiencedToday: true},
    { type: "Sick", experiencedToday: true}
  ];

  //Log a note
  let [notesList, setNotesList] = useState([]);
  let [newNote, setNewNote] = useState("");

  const handleNoteSubmitting = (event) => {
    setNewNote=(event.target.value);
  }
  const addNote = () => {
    const newNotesList = [...notesList, newNote];
    setNotesList(newNotesList);
  }

  return (
    <div className="App">
      <ToggleSymptom />
      <ClickLogger />
      <NoteLogger />

      {/* <b>Experienced Today</b>
      {// Show which daily stats were experienced today
      dailyStats.map(
        (stat, key) => stat.experiencedToday && <ul>{stat.type}</ul>
      )}

      <br />
      Log Note <input onChange={handleNoteSubmitting} />
      <button onClick={addNote}>Add Note</button> */}
    </div>
  );
}

export default App;