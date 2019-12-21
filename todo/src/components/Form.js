import React, { useState } from 'react';

const Form = (props) => {
    const [formValues, setFormValues] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch( {type: 'ADD_TODO', payload: formValues })
        setFormValues('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        // dispatch( {type: 'ADD_TODO', payload: formValues })
        setFormValues(e.target.value);
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='item'
                        placeholder='...to do'
                        value={formValues}
                        onChange={handleChange}
                    />
                <button>Add To Do</button>
            </form>
                &nbsp;
                <button>Clear Selected</button>
        </div>
    )
};

export default Form;




// - Build a form to add todos to your list
// - Build a function that will dispatch an action to add a new todo
// - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)