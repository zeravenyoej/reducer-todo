import React, { useState } from 'react';

const Form = (props) => {
    const [formValues, setFormValues] = useState('');

    const handleChange = (e) => {
        setFormValues(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'ADD_TODO', payload: formValues })
        setFormValues('');
    };

    const clearItems = (e) => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR_ITEMS" })
    }
    console.log('FORM: ', formValues)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='formValues'
                        placeholder='enter To DO'
                        value={formValues}
                        onChange={handleChange}
                    />
                    &nbsp; &nbsp; &nbsp;
                <button>Add To Do</button>
            </form>
                <br/>
                &nbsp;
                <button onClick={clearItems}>Clear Selected</button>
        </div>
    )
};

export default Form;




// - Build a form to add todos to your list
// - Build a function that will dispatch an action to add a new todo
// - Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)