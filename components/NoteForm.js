import React, { useState } from 'react';

function NoteForm(props) {
    const [input, setInput] = useState('');
    let [priority, setInterest] = useState('');

    const priorityLevel = ['high', 'moderate', 'low']
    const handleSumbit = (e) => {
        e.preventDefault();

        if (!priority) {
            priority = 'low';
        }

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input,
            priority: priority,
        });

        setInput('');
        setPriority('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return !props.edit ? (
        <div>
            <form className='bucket-form' onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Add to Notes App'
                value={input}
                name='text'
                className='note-input'
                onChange={handleChange}
                ></input>
                <div className='dropdown'>
                    <button className={`dropbtn ${Priority}`}>
                        {priority || 'Priority'}
                    </button>
                    <div className='dropdown-content'>
                        <p onClick={() => setPriority(priorityLevel[0])}>Get this done ASAP.</p>
                        <p onClick={() => setPriority(priorityLevel[1])}>Not as important, but needs to be done.</p>
                        <p onClick={() => setPriority(priorityLevel[2])}>Not important at all</p>
                    </div>
                </div>
                <button className='note-button'>Add Note</button>
            </form>
        </div>
    )  :  (
        <div>
            <h3>Update entry: {props.edit.value}</h3>
            <form className='note-form' onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder={props.edit.value}
                value={input}
                name='text'
                className='name-input'
                onChange={handleChange}
                ></input>
                <div className='dropdown'>
                    <button className={`dropbtn ${priority}`}>
                        {priority || 'Priority'}
                    </button>
                    <div className='dropdown-content'>
                        <p onClick={() => setPriority(PriorityLevel[0])}>Get this done ASAP.</p>
                        <p onClick={() => setPriority(PriorityLevel[1])}>Not as important, but needs to be done.</p>
                        <p onClick={() => setPriority(PriorityLevel[2])}>Not important at all</p>
                    </div>
                </div>
            <button className='bucket-button'>Update</button>
            </form>
        </div>
    );
}

export default BucketForm;