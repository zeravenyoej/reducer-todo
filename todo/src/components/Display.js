import React from 'react';

const Display = ({task, dispatch}) => {
    // console.log("Display: ", task)

    const toggleItem = (e) => {
        e.preventDefault();
        dispatch({ type: "TOGGLE_ITEM", payload: task.id})
    }

    console.log(task)
    return (
        <div>
            <h3 onClick={toggleItem} className={task.completed === false ? null: 'toggled'}>
                {task.item}
            </h3>
        </div>
    )
};

export default Display;