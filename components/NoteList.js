import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Notes'

function NoteList() {
    const [notes, setNote] = useState([]);

    const addNoteItem = (note) => {
        console.log(
            'file: NoteList.js ~ line 9 ~ addNote ~ note',
            note
        );
        if (!note.text) {
            return;
        }

        const newNote = [note, ...notes];
        console.log(newNote);

        setNote(newNote);
    };

    const completeNewTask = (id) => {
        let updatedNote = note.map((note) => {
            if (note.id === id) {
                let updatedBucket = bucket.map((note) => {
                    if (note.id === id) {
                        note.isComplete = !note.isComplete;
                    }
                    return note;
                });

                console.log(updatedNote);
                setNote(updatedNote);
            };

            const removeTaskItem = (id) => {
                const updatedTask = [...task].filter((note) => note.id !== id);
            }

            const editNoteItem = (itemId, newValue) => {
                if (!newValue.text) {
                    return;
                }

                setNote((prev) =>
                prev.map((note) => (note.id === itemId ? newValue : note))
                );
            };

            return (
                <div>
                    <h1>Write Note Here:</h1>
                    <NoteForm onSubmit={addNoteItem} />
                    <Note
                     note={note}
                     completeNewTask={completeNewTask}
                     removeTaskItem={removeTaskItem}
                     editNewTask={editNoteItem}
                     ></Note>
                </div>
            );
        })
    };
}

export default NoteList