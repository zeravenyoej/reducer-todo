import React from 'react';
import Display from './Display';


const TodoList = (props) => {

    return (
        <div>
            {props.todoState.map((task, index)=>{
                return <Display
                    key={index}
                    task={task}
                    dispatch={props.dispatch}
                />
            })}
        </div>
    )
};

export default TodoList;