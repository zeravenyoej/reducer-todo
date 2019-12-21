import React, { useState, useReducer } from 'react';
import Display from './Display';


const TodoList = (props) => {
    console.log('todolist: ', props)
    return (
        <div>
            {props.todoState.map((task)=>{
                return <Display
                    key={task.id}
                    task={task}
                />
            })}
        </div>
    )
};

export default TodoList;