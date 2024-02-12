import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./component/NotesList";
import Search from "./component/Search";
import Header from "./component/Header";

const App = () => {
    const [searchText, setSearchText ] = useState('');
    const [darkMode, setDarkMode ] = useState(false);
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-note-app-data')) || []);

    useEffect(() => {
        localStorage.setItem(
            'react-note-app-data',
            JSON.stringify(notes)
        );
    },[notes]);

    const handleAddNote = ( text ) => {
        const newDate = new Date();
        const newNote = {
            id : nanoid(),
            text: text,
            date: newDate.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes.reverse());
    }

    const handleDeleteNote = ( id ) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header setDarkMode={setDarkMode}/>
                <Search setSearchText={setSearchText} />
                <NotesList 
                    notes={
                        notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))
                    }
                    handleAddNote={handleAddNote}
                    handleDeleteNote={handleDeleteNote}
                />
            </div>
        </div>
    );
};

export default App;