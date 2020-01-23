import React from 'react';

const Display = ({task, dispatch}) => {

    const toggleItem = (e) => {
        e.preventDefault();
        dispatch({ type: "TOGGLE_ITEM", payload: task.id })
    }

    return (
        <div>
            <h3 onClick={toggleItem} className={!task.completed ? null: 'toggled'}>
                {task.item}
            </h3>
        </div>
    )
};

export default Display;