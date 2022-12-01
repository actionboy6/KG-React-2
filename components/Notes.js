import React, { useState } from 'react';
import NoteForm from './NoteForm';

function Note(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    console.log(props.notes);

    const submitUpdate = (value) => {
        props.editBucketItem(edit.id, value);
        setEdit({ id: null, value: '', eagerness: '' });
    };

    if(edit.id) {
        return <NoteForm edit={edit} onSubmit={submitUpdate} />;
    };

    return props.notes.map((item, i) => (
        <div
        className={
            item.isComplete
            `notes-row complete ${item.value}`
            `notes-row ${item.value}`
        }
        key={i}
        >
            <div key={item.id} onClick={() => props.completeNotes(item.id)}>
                {item.text}
            </div>
            <div className='icons'>
                {console.log(item)}
                <p onClick={() => setEdit({ id: item.id, value: item.text})}>save</p>
                <p onClick={() => props.removeNote(item.id)}> delete </p>
            </div>
        </div>
    ));
}

export default Note;