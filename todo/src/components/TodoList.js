import React, { useState, useReducer } from 'react';
import Display from './Display';
import { reducer, initialState } from '../reducers/reducer';


const TodoList = () => {
    const [todoState, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Display
            task={todoState}
            />
        </div>
    )
};

export default TodoList;